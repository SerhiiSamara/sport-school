import { ReactNode, FC } from 'react';

import NavBiatlon from "@/components/NavBiatlon";

type Props = {
	children: ReactNode
};

const BiatlonLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<h1>Biatlon</h1>
			<NavBiatlon />
			{children}
		</>
	);
};
export default BiatlonLayout;