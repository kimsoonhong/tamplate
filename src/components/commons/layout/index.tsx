import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
	width: 1200px;
	/* height: 100vh; */
	margin: auto;

	/* display: none; */

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Body = styled.div`
	display: flex;
	width: 100%;
`;

type IProps = {
	children: ReactNode;
};
export default function Layout(props: IProps) {
	return (
		<Wrapper>
			<LayoutHeader />
			<LayoutNavigation />
			{props.children}
		</Wrapper>
	);
}
