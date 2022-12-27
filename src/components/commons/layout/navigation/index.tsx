import styled from "@emotion/styled";

const Wrapper = styled.div`
	width: 100%;
	height: 36px;
	background-color: var(--color-2);

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0px 120px 0px 120px;

	margin-bottom: 4px;
`;

const TextBox = styled.div`
	font-size: var(--font-small);

	text-align: center;
	line-height: 36px;
	:hover {
		cursor: pointer;
	}
`;

export default function LayoutNavigation() {
	return (
		<Wrapper>
			<TextBox>상품</TextBox>
			<TextBox>장바구니</TextBox>
		</Wrapper>
	);
}
