import { HeaderRow } from './headerRow';
import { Row } from './row';

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
