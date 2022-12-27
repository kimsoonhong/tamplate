import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
	width: 100%;
	min-height: 500px;
	height: 65vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* background-color: blue; */

	@media ${breakPoints.mobile} {
		background-color: blue;
	}
`;

export const SearchWapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: right;
	padding-top: 16px;
	padding-right: 20px;
	margin-bottom: 12px;
	@media ${breakPoints.mobile} {
	}
`;

export const SearchInput = styled.input`
	width: 200px;
	height: 52px;
	font-size: 20px;
	padding-left: 16px;
	border: none;
	border-bottom: 2px gray solid;
	flood-color: gray;
	@media ${breakPoints.mobile} {
	}
`;

export const CardWapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media ${breakPoints.mobile} {
	}
`;

export const PaginationWapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media ${breakPoints.mobile} {
	}
`;

export const Pagination = styled.div`
	@media ${breakPoints.mobile} {
	}
`;
