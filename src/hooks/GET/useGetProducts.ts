import { API } from "@/services/api";
import { GetAllProducts, GetProductsParams } from "@/types/products";
import { transformParamsToUrl } from "@/utils/transformParamsToUrl";
import { useQuery } from "@tanstack/react-query";

export const getProducts = async (params: GetProductsParams) => {
  const { query, meta } = transformParamsToUrl(params);

  console.log(query);

  const { data } = await API.post("/", {
    query: `
      query {
        allProducts(${query}) {
          id
          name
          image_url
          price_in_cents,
          category,
        },
        _allProductsMeta ${meta ? `(${meta})` : null} {
          count
        }
      }
      `,
  });

  const allProducts = data && {
    allProducts: data.data.allProducts,
    total: data.data._allProductsMeta.count,
  };

  return allProducts;
};

export const useGetProducts = (params: GetProductsParams) => {
  const { data, isLoading } = useQuery<GetAllProducts>({
    queryKey: ["GET_products", params],
    queryFn: () => getProducts(params),
  });

  return {
    data,
    isLoading,
  };
};
