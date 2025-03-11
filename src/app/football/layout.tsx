import { ReactNode, FC } from 'react';

import NavFootball from "@/components/NavFootball";

type Props = {
	children: ReactNode
};

const FootballLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<h1>Football</h1>
			<NavFootball />
			{children}
		</>
	);
};
export default FootballLayout;

