import { ReactNode, FC } from 'react';

import NavSkyRacing from "@/components/NavSkyRacing";

type Props = {
	children: ReactNode
};

const SkyRacingLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<NavSkyRacing />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default SkyRacingLayout;