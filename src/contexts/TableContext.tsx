import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Property } from 'csstype';

type TableType = number[];

type TableContextType = {
	getCell: (row: number, column: number) => number;
	changeCell: (row: number, column: number) => void;
	colors: Property.BackgroundColor[];
	setColors: (newColors: Property.BackgroundColor[]) => void;
	getCodeForIndex: (idx: number) => string;
};

type TableStateType = {
	table: TableType;
	height: number;
	colors: Property.BackgroundColor[];
};

type TableAction = {
	type: 'increment';
	rowIndex: number;
	columnIndex: number;
} | {
	type: 'updateColors';
	colors: Property.BackgroundColor[];
} | {
	type: 'updateSize';
	width: number;
	height: number;
};

type TableContextProviderProps = {
	rows: string[];
	columns: string[];
	initialColors: Property.BackgroundColor[];
	children: React.ReactNode;
};

const TableContext = createContext<TableContextType>({
	getCell: () => 0,
	changeCell: () => { },
	colors: [],
	setColors: () => { },
	getCodeForIndex: () => ''
});

function copyAndUpdate<T>(tab: T[], idx: number, val: T) {
	return tab.map((v, i) => i === idx ? val : v);
}

function createTable(width: number, height: number): TableType {
	return new Array(width * height).fill(0);
}

const tableReducer = function (state: TableStateType, action: TableAction) {
	switch (action.type) {
		case 'increment':
			const idx = action.columnIndex * state.height + action.rowIndex;
			return {
				...state,
				table: copyAndUpdate(
					state.table,
					idx,
					(state.table[idx] + 1) % state.colors.length
				)
			};
		case 'updateColors':
			if (state.colors.length <= action.colors.length)
				return { ...state, colors: action.colors };
			return {
				...state,
				colors: action.colors,
				table: state.table.map(v => v >= action.colors.length ? 0 : v)
			};
		case 'updateSize':
			return { ...state, width: action.width, table: createTable(action.width, action.height) };
		default:
			return state;
	}
}

export const TableContextProvider = React.memo<TableContextProviderProps>(({ rows, columns, initialColors, children }) => {
	const [state, dispatch] = useReducer<React.Reducer<TableStateType, TableAction>, undefined>(tableReducer, undefined, () => ({
		table: createTable(columns.length, rows.length),
		height: rows.length,
		colors: initialColors
	}));

	useEffect(() => {
		dispatch({ type: 'updateSize', width: columns.length, height: rows.length });
	}, [rows.length, columns.length]);

	const setColors = useCallback((colors: Property.BackgroundColor[]) => {
		dispatch({ type: 'updateColors', colors });
	}, []);

	const getCell = useCallback((rowIndex: number, columnIndex: number) =>
		state.table[columnIndex * state.height + rowIndex],
		[state.table, state.height]
	);

	const changeCell = useCallback((rowIndex: number, columnIndex: number) => {
		dispatch({ type: 'increment', rowIndex, columnIndex });
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

	const contextValue = useMemo(() => ({
		getCell,
		changeCell,
		colors: state.colors,
		setColors,
		getCodeForIndex
	}), [getCell, changeCell, state.colors, getCodeForIndex, setColors]);

	return (
		<TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
	);
});

export const useTableContext = () => useContext(TableContext);
