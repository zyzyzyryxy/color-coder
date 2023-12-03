export function copyAndUpdate<T>(tab: T[], idx: number, val: T) {
	return tab.map((v, i) => i === idx ? val : v);
}
