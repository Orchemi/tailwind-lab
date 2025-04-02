import { twMerge } from 'tailwind-merge';

const page = () => {
	return (
		<div
			className={twMerge(
				'bg-red-500 px-2 py-1 hover:bg-red-700',
				'bg-blue-500 p-3',
			)}
		>
			Hello, Tailwind Merge
		</div>
	);
};

export default page;
