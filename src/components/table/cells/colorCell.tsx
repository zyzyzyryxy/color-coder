import { useCallback } from 'react';
import { useTableContext } from '../../../contexts/TableContext';
import { BaseCell } from './baseCell';

type ColorCellProps = {
	rIdx: number;
	cIdx: number;
};

export function ColorCell({rIdx, cIdx}: ColorCellProps) {
	const { getCell, changeCell, colors } = useTableContext();

	const onClick = useCallback(() => {
		changeCell(rIdx, cIdx);
	}, [changeCell, rIdx, cIdx]);

	return (
		<BaseCell color={colors[getCell(rIdx, cIdx)]} onClick={onClick}/>
	);
}