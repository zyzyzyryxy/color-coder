import type {Property} from 'csstype';

type CodeProps = {
	color: Property.Color;
	code: string;
};

export function Code({color, code}: CodeProps) {
	return (
		<div style={{color}}>{code}</div>
	);
}
