import React from 'react';
import { BaseCell } from './BaseCell';

type HeaderCellProps = {
	label: string;
};

export function HeaderCell({label}: HeaderCellProps) {
	return (
		<BaseCell color={'lightgray'} label={label.toString()}/>
	);
}
