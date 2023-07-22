export const getTotalPages = (
  totalProducts: number | undefined,
  perPage: number
) => {
  return totalProducts ? Math.ceil(totalProducts / perPage) : 0;
};
