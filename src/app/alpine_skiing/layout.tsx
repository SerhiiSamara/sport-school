import { ReactNode, FC } from 'react';

import NavAlpineSkiing from "@/components/NavAlpineSkiing";

type Props = {
	children: ReactNode
};

const AlpineSkiingLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<NavAlpineSkiing />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default AlpineSkiingLayout;