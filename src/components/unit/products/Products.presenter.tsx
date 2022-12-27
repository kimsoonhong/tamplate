import {
	Wrapper,
	SearchWapper,
	SearchInput,
	CardWapper,
	PaginationWapper,
	Pagination,
} from "./Products.styles";
import ItemCard from "../../commons/itemCard/ItemCard";

export default function ProductsUI() {
	return (
		<Wrapper>
			<SearchWapper>
				<SearchInput placeholder="# 상품명 검색하기" />
			</SearchWapper>
			<CardWapper>
				<ItemCard /> <ItemCard /> <ItemCard /> <ItemCard /> <ItemCard />
			</CardWapper>
			<PaginationWapper>
				<Pagination> {`<  1 2 3 4 5  >`}</Pagination>
			</PaginationWapper>
		</Wrapper>
	);
}
