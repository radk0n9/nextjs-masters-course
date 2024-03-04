import { useState } from "react";

export const InputReviewForm = ({
	label,
	name,
	type,
	required,
	placeholder,
}: {
	label: string;
	name: string;
	type: string;
	required: boolean;
	placeholder: string;
}) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState<string | null>(null);
	//console.log(email);
	function isValid(email: string) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!isValid(event.target.value)) {
			setError("Please enter a valid email address");
		} else {
			setError(null);
		}
		setEmail(event.target.value);
	};

	return (
		<label className="mb-3 flex max-w-md flex-col gap-1">
			<span className="text-sm text-gray-600">{label}</span>
			{type === "area" ? (
				<textarea
					required={required}
					placeholder={placeholder}
					name={name}
					className="mt-1 max-h-48 min-h-3 rounded-md border p-2 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
				></textarea>
			) : (
				<input
					required={required}
					name={name}
					placeholder={placeholder}
					type={type}
					value={type === "email" ? email : undefined}
					onChange={type === "email" ? handleChange : undefined}
					className={`mt-1 min-h-3 rounded-md border p-2 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
				/>
			)}
			{error && <span className="text-right text-sm text-red-500">{error}</span>}
		</label>
	);
};
