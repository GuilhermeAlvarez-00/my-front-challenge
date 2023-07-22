import { GetProductsParams } from "@/types/products";

export const transformParamsToUrl = ({
  page,
  perPage,
  filter,
}: GetProductsParams) => {
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
