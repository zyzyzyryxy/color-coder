import { Color } from '../../contexts/TableContext';

type MulticolorButtonProps = {
	colors: Color[];
};

export function MulticolorButton({colors}: MulticolorButtonProps) {
	return (
		<div
			className='ColorBox Multicolor'
		>
			{colors.map((c, idx) => <div className='MulticolorPart' style={{backgroundColor: c}} key={idx}/>)}
		</div>
	);
}