export const Spinner = () => {
	return (
		<div className="flex h-36 items-center justify-center" aria-busy="true">
			<div className="h-20 w-20 animate-spin rounded-full border-b-4 border-t-4 border-purple-900"></div>
		</div>
	);
};
