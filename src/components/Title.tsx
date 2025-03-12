import { ReactNode, FC } from "react";

type ITitleProps = {
	type: "page-title";
	children: ReactNode;
};

const Title: FC<ITitleProps> = ({ type, children }) => {

	switch (type) {

		case "page-title":
			return <h1 className="page-title">{children}</h1>;

		default:
			return <p>{children}</p>;
	};
};

export default Title;