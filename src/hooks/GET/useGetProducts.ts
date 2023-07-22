import { API } from "@/services/api";
import { GetAllProducts, GetProductsParams } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const getProducts = async ({
  page,
  perPage,
  filter,
}: GetProductsParams) => {
  const getParams = () => {
    let query = `page: ${page}, perPage: ${perPage},`;
    let keys: any[] = [];
    for (let item of Object.keys(filter)) {
      if (filter[item as keyof typeof filter]) keys.push(item);
    }

    if (!keys.length) return query;

    const filters = keys.reduce((acc: string, cur: any) => {
      acc += `${cur === "name" ? `q` : cur}: "${
        filter[cur as keyof typeof filter]
      }", `;
      return acc;
    }, "");

    return query + `filter: {${filters}}`;
  };

  const query = getParams();

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
        _allProductsMeta ${query ? `(${query})` : null} {
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
