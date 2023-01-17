export interface IgetAccordionContents {
	title: string;
	page: number;
}

export interface IgetRecomExploration {
	title: string;
	page: number;
}

export interface IgetAccordionContents {
	title: string;
	page: number;
}

export interface IputRecomExploration {
	title: string;
	page: number;
}

export interface IgetAccordionContents {
	title: string;
	page: number;
}

export interface IgetGroupRes {
	id?: any;
	activeYsno?: boolean | string;
	amndDttm?: string;
	amnrId?: string;
	countContents?: number;
	countFolder?: number;
	cretDttm?: string;
	crtrId?: string;
	dltYsno?: boolean;
	groupKey?: string | null;
	groupName?: string | null;
	themeGroupId?: number | string;
	themeId?: number | string;
	groupName2?: string;
	groupKey2?: string;
	themeName?: string;
	exhibitStartDttm?: string;
	exhibitEndDttm?: string;
}


// - 하나의 파일에서만 쓰는 interface라면 해당 파일에서 선언
// - interface 명 앞에는 대문자 I 를 붙혀 관리한다.
