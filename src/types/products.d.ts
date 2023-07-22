export type ProductProps = {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
  category: string;
};

export type GetAllProducts = {
  allProducts: ProductProps[];
  total: number;
};

// HTTP
type GetProductsParams = {
  page: number;
  perPage: number;
  sortField: string;
  sortOrder: string;
  filter: {
    q?: string;
    category?: string;
  };
};
