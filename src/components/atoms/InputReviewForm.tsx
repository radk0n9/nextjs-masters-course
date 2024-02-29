export const InputReviewForm = ({
	label,
	name,
	type,
	required,
}: {
	label: string;
	name: string;
	type: string;
	required: boolean;
}) => {
	return (
		<label className="mb-3 flex max-w-md flex-col gap-1">
			<span className="text-sm">{label}</span>
			{type === "area" ? (
				<textarea
					required={required}
					name={name}
					className=" mt-1 max-h-48 min-h-3 rounded-md border p-2 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
				></textarea>
			) : (
				<input
					required={required}
					name={name}
					type={type}
					className="mt-1 min-h-3 rounded-md border p-2 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
				/>
			)}
		</label>
	);
};
