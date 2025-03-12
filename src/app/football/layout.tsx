import { ReactNode, FC } from 'react';

import NavFootball from "@/components/NavFootball";
import Title from '@/components/Title';

type Props = {
	children: ReactNode
};

const FootballLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex justify-center bg-main-dark'>
			<section className='container pt-[28px] pb-[50px]'>
				<Title type='page-title'>Футбол</Title>
				<NavFootball />
				<div className='h-[1px] -mx-[16px] mb-[32px] bg-block-grey'></div>
				{children}
			</section>
		</main>
	);
};
export default FootballLayout;

