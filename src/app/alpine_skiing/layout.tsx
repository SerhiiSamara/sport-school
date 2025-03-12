import { ReactNode, FC } from 'react';

import NavAlpineSkiing from "@/components/NavAlpineSkiing";

type Props = {
	children: ReactNode
};

const AlpineSkiingLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<h1>Alpine skiing</h1>
			<NavAlpineSkiing />
			{children}
		</>
	);
};
export default AlpineSkiingLayout;