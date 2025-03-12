import { ReactNode, FC } from 'react';

import NavBiatlon from "@/components/NavBiatlon";

type Props = {
	children: ReactNode
};

const BiatlonLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<NavBiatlon />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default BiatlonLayout;