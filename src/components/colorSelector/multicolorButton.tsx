import { useCallback } from 'react';
import { Color, useTableContext } from '../../contexts/TableContext';

type MulticolorButtonProps = {
	colors: Color[];
};

export function MulticolorButton({colors}: MulticolorButtonProps) {
	const { setCurrentColorIndex, selectedColorIndex } = useTableContext();
	const onSelect = useCallback(() => {
		setCurrentColorIndex(null);
	}, [setCurrentColorIndex]);
	const focused = selectedColorIndex === null;

	return (
		<div
			className={'ColorBox Multicolor' + (focused ? ' Focused' : '')}
			onClick={onSelect}
		>
			{colors.map((c, idx) => <div className='MulticolorPart' style={{backgroundColor: c}} key={idx}/>)}
		</div>
	);
}