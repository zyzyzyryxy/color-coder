import { Color } from '../../../contexts/TableContext';

type BaseCellProps = {
	color: Color,
	onClick: () => void;
	label?: never;
} | {
	color: Color,
	onClick?: never;
	label: string;
};

export function BaseCell({color, onClick, label}: BaseCellProps) {
	return (
		<div
			className='Cell'
			style={{backgroundColor: color}}
			onClick={onClick}
		>
			{label}
		</div>
	);
}
