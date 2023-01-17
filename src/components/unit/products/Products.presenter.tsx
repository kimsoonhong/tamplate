import {
	Wrapper,
	SearchWapper,
	SearchInput,
	CardWapper,
} from "./Products.styles";
import ItemCard from "../../commons/itemCard/ItemCard";
import { IProductsUI } from "./Products.types";

export default function ProductsUI({ itemList }: IProductsUI) {
	return (
		<Wrapper>
			<SearchWapper>
				<SearchInput placeholder="# 상품명 검색하기" />
			</SearchWapper>
			<CardWapper>
				{itemList.map((i, idx) => {
					return (
						<ItemCard
							key={idx}
							name={i.item_name}
							price={i.price}
							src={i.detail_image_url}
							number={i.item_no}
						/>
					);
				})}
			</CardWapper>
		</Wrapper>
	);
}
