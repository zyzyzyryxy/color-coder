import { useTableContext } from "../../contexts/TableContext";
import { ColorButton } from "./colorButton";
import { MulticolorButton } from "./multicolorButton";

export function ColorSelector() {
	const { colors } = useTableContext();

	return (
		<div className='ColorPicker'>
			<MulticolorButton colors={colors} key='Multi' />
			{colors.map((c, idx) => <ColorButton color={c} editable={idx !== 0} key={idx} />)}
		</div>
	);
}