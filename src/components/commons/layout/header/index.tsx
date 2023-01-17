import styled from "@emotion/styled";
import { GlobalContext } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { useContext } from "react";
const Wrapper = styled.div`
	width: 100%;
	min-height: 128px;
	display: ${() => (useRouter().pathname === "/" ? "none" : "")};

	background-color: var(--color-1);
`;

const TextBox = styled.div`
	font-family: "header";
	font-size: var(--font-large);
	font-weight: var(--weight-bold);

	text-align: center;
	line-height: 128px;
`;

export default function LayoutHeader() {
	const { global } = useContext(GlobalContext);

	return (
		<Wrapper>
			<TextBox>Template : {global.isMember}</TextBox>
		</Wrapper>
	);
}
