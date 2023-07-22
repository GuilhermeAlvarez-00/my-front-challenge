import { Dispatch, FC, SetStateAction } from "react";
import { Pagination } from "../Pagination";
import { ProductProps } from "@/types/products";

import * as S from "./styles";

interface IListProducts {
  allProducts: ProductProps[] | undefined;
  totalPages: number | undefined;
  setPage: Dispatch<SetStateAction<number>>;
}

export const ListProducts: FC<IListProducts> = ({
  allProducts,
  totalPages,
  setPage,
}) => {
  return (
    <S.Container>
      <h1>ListProducts</h1>
      {allProducts &&
        allProducts.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}

      {totalPages && <Pagination setPage={setPage} totalPages={totalPages} />}
    </S.Container>
  );
};
