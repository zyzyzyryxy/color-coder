import { useTableContext } from '../../contexts/TableContext';
import { ColorButton } from './colorButton';
import { MulticolorButton } from './multicolorButton';

type ColorSelectorProps = {
	onEditStart: (index: number) => void;
};

export function ColorSelector({onEditStart}: ColorSelectorProps) {
	const { colors } = useTableContext();

	return (
		<div className='ColorPicker'>
			<MulticolorButton colors={colors} key='Multi' />
			{colors.map((c, idx) => (
				<ColorButton
					color={c}
					editable={idx !== 0}
					onEditStart={onEditStart}
					colorIndex={idx}
					key={idx}
				/>
			))}
		</div>
	);
}