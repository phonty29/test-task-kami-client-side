export interface productItem {
	id: string;
	name: string;
	price: number;
	mainImg: string;
	status: string;
}

export interface ProductState {
	productItems: productItem[];
  }