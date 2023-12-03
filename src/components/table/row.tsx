import { ColorCell } from './cells/colorCell';
import { HeaderCell } from './cells/headerCell';

type RowProps = {
	row: string;
	rowIdx: number;
	columns: string[];
};

export function Row({row, rowIdx, columns}: RowProps) {
	return (
		<div className='Row'>
			<HeaderCell label={row}/>
			{columns.map((_, c) => {
				return (
					<ColorCell rIdx={rowIdx} cIdx={c} key={c}/>
				);
			})}
		</div>
	);
}