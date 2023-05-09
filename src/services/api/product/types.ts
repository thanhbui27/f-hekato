export interface categories {
  categoryId: number;
  categoryName: string;
}



export interface list_image {
  id: number;
  url_image: string;
  timeAdd: string;
}

export interface List_imageV2 extends list_image {
  productId : number
}

export interface paramProduct {
  q?: string;
  PageIndex: number;
  PageSize: number;
}

export interface productAction {
  id: number;
  productId: number;
  newArrival: boolean;
  bestSeller: boolean;
  featured: boolean;
  specialOffer: boolean;
  products: any;
}

export interface product {
  productId: number;
  productName: string;
  list_image: list_image[];
  quantity: number;
  priceNew: number;
  priceOld: number;
  shortDetails: string;
  productDescription: string;
  dateAdd: string;
  productAction: productAction;
  categories: categories[];
}

export interface ProductV2 {
  categories: categories[];
  dateAdd: string;
  image_Url: string;
  priceNew: number;
  priceOld: number;
  productDescription: string;
  productId: number;
  productName: string;
  quantity: number;
  shortDetails: string;
}
