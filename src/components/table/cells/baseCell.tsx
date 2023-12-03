import type {Property} from 'csstype';

type BaseCellProps = {
	color: Property.BackgroundColor,
	onClick: () => void;
	label?: never;
} | {
	color: Property.BackgroundColor,
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
