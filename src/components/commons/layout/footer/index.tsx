import styled from "@emotion/styled";

const Wrapper = styled.div`
	width: 100%;
	min-height: 120px;
	padding-top: 12px;
	margin-top: 8px;

	background-color: var(--color-1);
`;

const TextBoxTop = styled.div`
	font-size: var(--font-medium);

	font-family: "header";
	margin-bottom: 8px;

	font-weight: var(--weight-bold);
	text-align: center;
`;

const TextBox = styled.div`
	font-size: var(--font-micro);
	text-align: center;
`;

const TextBoxBottom = styled.div`
	font-size: var(--font-micro);
	font-weight: var(--weight-semibold);
	text-align: center;
	margin-top: 8px;
`;

export default function LayoutFooter() {
	return (
		<Wrapper>
			<TextBoxTop>Let's Talk</TextBoxTop>
			<TextBox>010-6207-1147</TextBox>
			<TextBox>shong1332@naver.com</TextBox>
			<TextBoxBottom>
				2023 김순홍 - All rights reserved
				<br />
				version - 2.4.5
			</TextBoxBottom>
		</Wrapper>
	);
}
