import { useTableContext } from "../../contexts/TableContext";

export function ColorSelector() {
	const { colors } = useTableContext();

	return (
		<div className='ColorPicker'>
			<div className='ColorBox' style={{backgroundColor: 'gray'}}/>
			{colors.map(c => <div className='ColorBox' style={{backgroundColor: c}}/>)}
		</div>
	);
}