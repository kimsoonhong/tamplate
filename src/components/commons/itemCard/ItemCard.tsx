import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wapper = styled.div`
	width: 19%;
	height: 370px;
	margin: 4px;
	padding: 16px;
	border: 2px solid gray;
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media ${breakPoints.mobile} {
	}
`;

export const ImgWapper = styled.div`
	display: flex;
	justify-content: center;
	@media ${breakPoints.mobile} {
	}
`;
export const ItemImg = styled.div`
	width: 190px;
	height: 190px;
	background-color: royalblue;

	@media ${breakPoints.mobile} {
	}
`;
export const InfoWapper = styled.div`
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media ${breakPoints.mobile} {
	}
`;
export const TextDiv = styled.div`
	font-size: var(--font-regular);
	@media ${breakPoints.mobile} {
	}
`;
export const CartWapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	:hover {
		cursor: pointer;
	}
	@media ${breakPoints.mobile} {
	}
`;
export const CartImg = styled.div`
	width: 40px;
	height: 40px;

	background-color: royalblue;
	@media ${breakPoints.mobile} {
	}
`;

export const CartTextDiv = styled.div`
	width: 160px;
	/* font-size: var(--font-micro); */
	text-align: center;
	line-height: 40px;
	@media ${breakPoints.mobile} {
	}
`;
export default function ItemCard() {
	return (
		<Wapper>
			<ImgWapper>
				<ItemImg>d</ItemImg>
			</ImgWapper>
			<InfoWapper>
				<TextDiv>제목 : 슬리퍼</TextDiv>
				<TextDiv>가격 : ₩ 2,000</TextDiv>
			</InfoWapper>
			<CartWapper>
				<CartImg>d</CartImg>
				<CartTextDiv>카트에 담기</CartTextDiv>
			</CartWapper>
		</Wapper>
	);
}
