import { useRef } from "react";

export interface priceList {
	city: string;
	price: number;
};

export interface productItem {
	_id?: number | string;
	name: string;
	content: string;
	imageUrls?: [string];
	images?: any;
	status: boolean;
	price?: number;
	prices?: priceList[];
};

export interface ProductState {
	items: productItem[];
	currentPageItems: productItem[];
};

export const defaultProduct : productItem = {
	name: "",
	content: "",
	imageUrls: [''],
	images: [],
	status: true,
	price: 0,
	prices: [
		{city: "Astana", price: 0}, 
		{city: "Almaty", price: 0}, 
		{city: "Shymkent", price: 0}
	]
};