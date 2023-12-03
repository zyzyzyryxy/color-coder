import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Property } from 'csstype';
import { copyAndUpdate } from '../utils';

type TableType = number[];

export type Color = Property.BackgroundColor;

type TableContextType = {
	getCell: (row: number, column: number) => number;
	changeCell: (row: number, column: number) => void;
	colors: Color[];
	setColors: (newColors: Color[]) => void;
	getCodeForIndex: (idx: number) => string;
	setCurrentColorIndex: (idx: number | null) => void;
	selectedColorIndex: number | null;
};

type TableStateType = {
	table: TableType;
	height: number;
	colors: Color[];
	selectedColorIndex: number | null;
};

type TableAction = {
	type: 'updateCell';
	rowIndex: number;
	columnIndex: number;
} | {
	type: 'updateColors';
	colors: Color[];
} | {
	type: 'updateSize';
	width: number;
	height: number;
} | {
	type: 'setSelectedColorIndex';
	colorIndex: number | null;
};

type TableContextProviderProps = {
	rows: string[];
	columns: string[];
	initialColors: Color[];
	children: React.ReactNode;
};

const TableContext = createContext<TableContextType>({
	getCell: () => 0,
	changeCell: () => { },
	colors: [],
	setColors: () => { },
	getCodeForIndex: () => '',
	setCurrentColorIndex: () => {},
	selectedColorIndex: null
});

function createTable(width: number, height: number): TableType {
	return new Array(width * height).fill(0);
}

const tableReducer = function (state: TableStateType, action: TableAction): TableStateType {
	switch (action.type) {
		case 'updateCell':
			const idx = action.columnIndex * state.height + action.rowIndex;
			const newColorIdx = state.selectedColorIndex != null
				? state.selectedColorIndex
				: (state.table[idx] + 1) % state.colors.length;
			return {
				...state,
				table: copyAndUpdate(
					state.table,
					idx,
					newColorIdx
				)
			};
		case 'updateColors':
			return {
				...state,
				colors: action.colors,
				table: (state.colors.length <= action.colors.length)
					? state.table
					: state.table.map(v => v >= action.colors.length ? 0 : v),
				selectedColorIndex: state.selectedColorIndex !> action.colors.length
					? null
					: state.selectedColorIndex
			};
		case 'updateSize':
			return {
				...state,
				height: action.height,
				table: createTable(action.width, action.height)
			};
		case 'setSelectedColorIndex':
			return {
				...state,
				selectedColorIndex: action.colorIndex
			};
	}
}

export const TableContextProvider = React.memo<TableContextProviderProps>(({ rows, columns, initialColors, children }) => {
	const [state, dispatch] = useReducer<React.Reducer<TableStateType, TableAction>, undefined>(tableReducer, undefined, () => ({
		table: createTable(columns.length, rows.length),
		height: rows.length,
		colors: initialColors,
		selectedColorIndex: null
	}));

	useEffect(() => {
		dispatch({ type: 'updateSize', width: columns.length, height: rows.length });
	}, [rows.length, columns.length]);

	const setColors = useCallback((colors: Color[]) => {
		dispatch({ type: 'updateColors', colors });
	}, []);

	const getCell = useCallback((rowIndex: number, columnIndex: number) =>
		state.table[columnIndex * state.height + rowIndex],
		[state.table, state.height]
	);

	const changeCell = useCallback((rowIndex: number, columnIndex: number) => {
		dispatch({ type: 'updateCell', rowIndex, columnIndex });
	}, []);

	const getCodeForIndex = useCallback((cIdx: number) => {
		return state.table.reduce<string[]>((acc, cc, idx) => {
			if (cc === cIdx) {
				const col = Math.floor(idx / state.height);
				const row = idx % state.height;
				acc.push(columns[col] + rows[row]);
			}
			return acc;
		}, []).join(' ');
	}, [state.table, state.height, columns, rows]);

	const setCurrentColorIndex = useCallback((colorIndex: number | null) => {
		dispatch({type: 'setSelectedColorIndex', colorIndex});
	}, []);

	const contextValue = useMemo<TableContextType>(() => ({
		getCell,
		changeCell,
		colors: state.colors,
		setColors,
		getCodeForIndex,
		setCurrentColorIndex,
		selectedColorIndex: state.selectedColorIndex
	}), [getCell, changeCell, state.colors, getCodeForIndex, setColors, setCurrentColorIndex, state.selectedColorIndex]);

	return (
		<TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
	);
});

export const useTableContext = () => useContext(TableContext);
