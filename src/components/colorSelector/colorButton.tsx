import { Color } from '../../contexts/TableContext';
import editSvg from './edit.svg';

type ColorButtonProps = {
	color: Color;
	editable: boolean;
};

export function ColorButton({color, editable}: ColorButtonProps) {
	return (
		<div
			className='ColorBox'
			style={{backgroundColor: color}}
		>
			{editable ? <img src={editSvg} className='ColorEditButton' alt='edit'/> : null }
		</div>
	);
}