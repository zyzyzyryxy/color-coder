import React from 'react';
import { HeaderRow } from './HeaderRow';
import { Row } from './Row';

type TableProps = {
	rows: string[];
	columns: string[];
};

export function Table({rows, columns}: TableProps) {

	return (
		<div className='Table'>
			<HeaderRow columns={columns}/>
			{rows.map((r, ridx) => (
				<Row columns={columns} row={r} rowIdx={ridx} key={ridx}/>
			))}
		</div>
	);
}
