import { useCallback } from 'react';
import { Color } from '../../contexts/TableContext';

type ColorPickerItemProps = {
	color: Color;
	onSelect: (color: Color) => void;
};

export function ColorPickerItem({color, onSelect}: ColorPickerItemProps) {
	const onClick = useCallback(() => {
		onSelect(color);
	}, [color, onSelect]);

	return (
		<div
			className='ColorPickerItem'
			onClick={onClick}
			style={{backgroundColor: color}}
		/>
	);
}