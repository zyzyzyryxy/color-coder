import { useCallback } from 'react';
import { Color, useTableContext } from '../../contexts/TableContext';
import editSvg from './edit.svg';

type ColorButtonProps = {
	color: Color;
	colorIndex: number;
	editable: boolean;
	onEditStart: (idx: number) => void;
} | {
	color: Color;
	colorIndex: number;
	editable: false;
	onEditStart?: void;
};

export function ColorButton({color, colorIndex, editable, onEditStart}: ColorButtonProps) {
	const { setCurrentColorIndex, selectedColorIndex } = useTableContext();
	const focused = selectedColorIndex === colorIndex;

	const onSelect = useCallback(() => {
		setCurrentColorIndex(colorIndex);
	}, [setCurrentColorIndex, colorIndex]);

	const onEditClicked = useCallback(() => {
		if (onEditStart) onEditStart(colorIndex);
	}, [onEditStart, colorIndex]);

	return (
		<div
			className={'ColorBox' + (focused ? ' Focused' : '')}
			style={{backgroundColor: color}}
			onClick={onSelect}
		>
			{editable ? (
				<img
					src={editSvg}
					className='ColorEditButton'
					alt='edit'
					onClick={onEditClicked}
				/>) : null }
		</div>
	);
}