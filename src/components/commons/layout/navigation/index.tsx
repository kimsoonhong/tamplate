import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
	width: 100%;
	height: 36px;
	background-color: var(--color-2);
	display: ${() => (useRouter().pathname === "/" ? "none" : "flex")};

	flex-direction: row;
	justify-content: space-around;
	padding: 0px 120px 0px 120px;

	margin-bottom: 4px;
`;

const TextBox = styled.div`
	font-size: var(--font-medium);
	font-weight: var(--weight-semibold);

	text-align: center;
	line-height: 36px;
	:hover {
		cursor: pointer;
	}
`;

export default function LayoutNavigation() {
	const router = useRouter();
	return (
		<Wrapper>
			<TextBox
				onClick={() => {
					router.push("/products");
				}}
			>
				상품
			</TextBox>
			<TextBox
				onClick={() => {
					router.push("/mui");
				}}
			>
				테일윈드 MUI
			</TextBox>
			<TextBox
				onClick={() => {
					router.push("/example");
				}}
			>
				페이지예시
			</TextBox>
		</Wrapper>
	);
}
