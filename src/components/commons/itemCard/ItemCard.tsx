import styled from "@emotion/styled";
import { NumberWithCommas } from "commons/libraries/utils/utils";

import { useRouter } from "next/router";
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
export const ItemImg = styled.img`
	width: 190px;
	height: 190px;
	object-fit: fill;

	@media ${breakPoints.mobile} {
	}
`;
export const InfoWapper = styled.div`
	height: 100px;
	padding: 12px 0px 12px 0px;
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
	font-size: 12px;

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

interface IItemCard {
	number: number;
	src: string;
	name: string;
	price: number;
}
export default function ItemCard(props: IItemCard) {
	const router = useRouter();
	const onClickDetail = () => {
		router.push(`/products/${props.number}`);
	};
	return (
		<Wapper>
			<ImgWapper>
				<ItemImg src={props.src} />
			</ImgWapper>
			<InfoWapper>
				<TextDiv>{props.name}</TextDiv>
				<TextDiv>가 격 : ₩{NumberWithCommas(props.price)}</TextDiv>
			</InfoWapper>
			<CartWapper>
				<CartImg>
					카트 <br />
					사진
				</CartImg>
				<CartTextDiv onClick={onClickDetail}>자세히 보기</CartTextDiv>
			</CartWapper>
		</Wapper>
	);
}
