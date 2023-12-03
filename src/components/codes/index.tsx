import { useTableContext } from '../../contexts/TableContext';
import { Code } from './code';

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
