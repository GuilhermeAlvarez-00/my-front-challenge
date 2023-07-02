import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

type GetProductsParams = {
  page: number;
  perPage: number;
};

export const getProducts = async ({ page, perPage }: GetProductsParams) => {
  const response = await API.post("/", {
    query: `
      query {
        allProducts(page: ${page}, perPage: ${perPage}) {
          id,
          name,
          image_url,
          price_in_cents
        }
      }
      `,
  });

  return response.data;
};

export const useGetProducts = ({ page, perPage }: GetProductsParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["GET_products", page],
    queryFn: () => getProducts({ page, perPage }),
  });

  return {
    data,
    isLoading,
  };
};
