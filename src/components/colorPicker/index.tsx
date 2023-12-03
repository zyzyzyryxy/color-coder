import { useCallback } from 'react';
import { Color, useTableContext } from '../../contexts/TableContext';
import { copyAndUpdate } from '../../utils';
import { ColorPickerItem } from './colorPickerItem';
import { Modal } from '../modal';

type ColorPickerProps = {
	allColors: Color[];
	editedIndex: number;
	onClose: () => void;
};

export function ColorPicker({allColors, editedIndex, onClose}: ColorPickerProps) {
	const { colors, setColors } = useTableContext();
	const onColorSelected = useCallback((color: Color) => {
		const newColors = copyAndUpdate(colors, editedIndex, color);
		console.log('onColorSelected', colors, newColors, editedIndex, color);
		setColors(newColors);
		onClose();
	}, [colors, setColors, editedIndex, onClose]);
	return (
		<Modal onCancel={onClose}>
			<div className='ColorPickerItems'>
				{allColors.map((c, idx) => (
					<ColorPickerItem color={c} onSelect={onColorSelected} key={idx} />
				))}
			</div>
		</Modal>
	);
}
