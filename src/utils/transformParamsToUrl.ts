import { GetProductsParams } from "@/types/products";

type ParamKey<T> = keyof T;

export const transformParamsToUrl = (params: GetProductsParams) => {
  const paramsQuery = Object.keys(params).filter((item) => item !== "filter");
  const metaQuery = Object.keys(params).filter(
    (item) => item !== "sortField" && item !== "sortOrder" && item !== "filter"
  );
  const paramsFilters = params.filter;

  const query = paramsQuery.reduce((acc, cur) => {
    acc += `${cur}: ${
      typeof params[cur as keyof typeof params] === "string" &&
      !params[cur as keyof typeof params]
        ? `"${params[cur as keyof typeof params]}"`
        : typeof params[cur as keyof typeof params] === "string"
        ? `"${params[cur as keyof typeof params]}"`
        : params[cur as keyof typeof params]
    }, `;

    return acc;
  }, "");

  const meta = metaQuery.reduce((acc, cur) => {
    acc += `${cur}: ${
      typeof params[cur as keyof typeof params] === "string" &&
      !params[cur as keyof typeof params]
        ? `"${params[cur as keyof typeof params]}"`
        : typeof params[cur as keyof typeof params] === "string"
        ? `"${params[cur as keyof typeof params]}"`
        : params[cur as keyof typeof params]
    }, `;

    return acc;
  }, "");

  const filters = Object.keys(paramsFilters).reduce((acc, cur) => {
    if (
      cur === "category" &&
      !params.filter[cur as ParamKey<typeof params.filter>]
    )
      return acc;

    acc += ` ${cur}: ${`"${
      params.filter[cur as ParamKey<typeof params.filter>]
    }"`}, `;

    return acc;
  }, "");

  const finalQuery = query + `filter: { ${filters} }`;
  const finalMeta = meta + `filter: { ${filters} }`;

  return {
    query: finalQuery,
    meta: finalMeta,
  };
};
