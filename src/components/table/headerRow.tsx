import { FillerCell } from './cells/fillerCell';
import { HeaderCell } from './cells/headerCell';

type RowProps = {
	columns: string[];
};

export function HeaderRow({columns}: RowProps) {
	return (
		<div className='Row'>
			<FillerCell/>
			{columns.map((c, cidx) => {
				return (
					<HeaderCell label={c} key={cidx}/>
				);
			})}
		</div>
	);
}