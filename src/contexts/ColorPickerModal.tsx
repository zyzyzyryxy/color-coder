import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';

type ColorPickerModalContextValue = {
	editedIndex: number | null;
	startEdit: (index: number) => void;
};

type ColorPickerModalContextProviderProps = {
	children: ReactNode;
};

const ColorPickerModalContext = createContext<ColorPickerModalContextValue>({
	editedIndex: null,
	startEdit: () => { }
});

export const ColorPickerModalContextProvider = React.memo(({children}: ColorPickerModalContextProviderProps) => {
	const [editedIndex, setEditedIndex] = useState<number | null>(null);
	const contextValue = useMemo<ColorPickerModalContextValue>(() => ({
		editedIndex,
		startEdit: setEditedIndex
	}), [editedIndex]);

	return (
		<ColorPickerModalContext.Provider value={contextValue}>
			{children}
		</ColorPickerModalContext.Provider>
	);
});

export function useColorPickerModalContext(): ColorPickerModalContextValue {
	return useContext(ColorPickerModalContext);
}