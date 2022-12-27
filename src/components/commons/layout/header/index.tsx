import styled from "@emotion/styled";

const Wrapper = styled.div`
	width: 100%;
	min-height: 128px;

	background-color: var(--color-1);
`;

const TextBox = styled.div`
	font-size: var(--font-large);
	font-weight: var(--weight-bold);

	text-align: center;
	line-height: 128px;
`;

export default function LayoutHeader() {
	return (
		<Wrapper>
			<TextBox>shong.Shop</TextBox>
		</Wrapper>
	);
}
