import React from 'react';
import { useTableContext } from '../TableContext';
import { Code } from './Code';

export function Codes() {
	const { colors, getCodeForIndex } = useTableContext();

	return (
		<div className='Codes'>
			{colors.map((c, idx) => (
				idx === 0 ? null : (
					<Code color={c} code={getCodeForIndex(idx)} key={idx}/>
				)
			))}
		</div>
	);
}
