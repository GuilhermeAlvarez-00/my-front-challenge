import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const getTotalProducts = async (perPage: number) => {
  const response = await API.post("/", {
    query: `
    query {
      _allProductsMeta {
        count
      }
    }
    `,
  });

  const totalProducts = response.data.data._allProductsMeta.count;
  const total = Math.ceil(totalProducts / perPage);

  return total;
};

export const useGetTotalProducts = (perPage: number) => {
  const { data } = useQuery({
    queryKey: ["GET_totalPages", perPage],
    queryFn: () => getTotalProducts(perPage),
  });

  return {
    data,
  };
};
