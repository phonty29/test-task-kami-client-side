export interface productItem {
	id: string;
	title: string;
	price: number;
	img: string;
	status: string;
}

export interface ProductState {
	productItems: productItem[];
	amount: number;
  }