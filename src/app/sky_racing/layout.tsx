import { ReactNode, FC } from 'react';

import NavSkyRacing from "@/components/NavSkyRacing";

type Props = {
	children: ReactNode
};

const SkyRacingLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<h1>Sky racing</h1>
			<NavSkyRacing />
			{children}
		</>
	);
};
export default SkyRacingLayout;