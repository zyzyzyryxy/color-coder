import React from 'react';
import { ColorCell } from "./cells/ColorCell";
import { HeaderCell } from "./cells/HeaderCell";

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