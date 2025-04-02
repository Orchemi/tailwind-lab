import { twMerge } from 'tailwind-merge';

const page = () => {
	return (
		<div
			className={twMerge(
				'px-2 py-1 bg-red-500 hover:bg-red-700',
				'p-3 bg-blue-500',
			)}
		>
			Hello, Tailwind Merge
		</div>
	);
};

export default page;
