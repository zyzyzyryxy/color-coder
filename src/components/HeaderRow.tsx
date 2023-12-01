import React from 'react';
import { FillerCell } from "./cells/FillerCell";
import { HeaderCell } from "./cells/HeaderCell";

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