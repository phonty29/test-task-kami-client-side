export interface productItem {
	_id?: number | string;
	name: string;
	content: any;
	images: any;
	status: boolean;
	price?: string | number;
	prices?: number[];
};

export interface ProductState {
	items: productItem[];
	currentPageItems: productItem[];
};