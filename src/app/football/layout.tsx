import { ReactNode, FC } from 'react';

import NavFootball from "@/components/NavFootball";

type Props = {
	children: ReactNode
};

const FootballLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<NavFootball />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default FootballLayout;

