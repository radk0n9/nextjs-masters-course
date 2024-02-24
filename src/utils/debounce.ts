import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler: NodeJS.Timeout = setTimeout(() => {
			if (value.length <= 1) {
				setDebouncedValue("");
			} else {
				setDebouncedValue(value);
			}
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};
