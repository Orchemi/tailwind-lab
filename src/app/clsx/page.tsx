import { cn } from '@/lib/utils';

const page = () => {
	return (
		<div
			className={cn(
				'bg-red-500',
				'bg-blue-500',
				['bg-purple-500', 'bg-yellow-500'],
				{
					'bg-green-500': true,
				},
			)}
		>
			Hello, clsx
		</div>
	);
};

export default page;
