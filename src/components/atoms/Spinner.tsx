export const Spinner = () => {
	return (
		<div className="flex h-36 items-center justify-center" aria-busy="true">
			<div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-purple-700"></div>
		</div>
	);
};
