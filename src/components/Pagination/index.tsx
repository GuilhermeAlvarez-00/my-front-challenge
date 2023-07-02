import { Dispatch, FC, SetStateAction } from "react";
import * as S from "./styles";

type PaginationProps = {
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination: FC<PaginationProps> = ({ totalPages, setPage }) => {
  return (
    <S.Container>
      {Array.from({ length: 5 }, (_, index) => index).map((item) => (
        <button key={item} onClick={() => setPage(item)}>
          {item + 1}
        </button>
      ))}
    </S.Container>
  );
};
