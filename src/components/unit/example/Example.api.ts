import commonApi from "commons/libraries/axios/commonApi";
import { IgetRecomExploration, IputRecomExploration } from "./Example.types";
import { IExTpye } from "commons/type/ExType";

//컨텐츠의 목록의 가지고 온다.
export const getAccordionContents = async (params: IExTpye) =>
	await commonApi.get(`/recom/contents`, { params: params });

//탐색홈을 조회한다.
export const getRecomExploration = async (params: IExTpye) =>
	await commonApi.get(`/recom/recom-exploration`, { params: params });

//탐색홈을 수정한다.
export const putRecomExploration = async (params: IputRecomExploration) =>
	await commonApi.put(`/recom/recom-exploration`, params);

//탐색홈의 노출 순서를 변경한다.
//재사용 되지 않는 타입 이라면 바로 지정 또한 가능
export const putRecomExplorationChange = async (params: {
	address: number;
	conter: number;
}) => await commonApi.post(`/recom/recom-exploration/change`, params);
