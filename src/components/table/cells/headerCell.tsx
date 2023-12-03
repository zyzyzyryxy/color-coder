import { BaseCell } from './baseCell';

type HeaderCellProps = {
	label: string;
};

export function HeaderCell({label}: HeaderCellProps) {
	return (
		<BaseCell color={'lightgray'} label={label.toString()}/>
	);
}
