// import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutHeader from "./header/LayoutHeader.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";
// import LayoutFooter from "./Footer/LayoutFooter.container";

import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
	width: 1200px;
	height: 100vh;
	margin: auto;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Body = styled.div`
	display: flex;
	width: 100%;
`;

interface IProps {
	children: ReactNode;
}
export default function Layout(props: IProps) {
	return (
		<Wrapper>
			<div>
				<LayoutHeader />
				<LayoutNavigation />
				<Body>{props.children}</Body>
			</div>
			<LayoutFooter />
		</Wrapper>
	);
}
