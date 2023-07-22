"use client";

import { CiSearch } from "react-icons/ci";

import * as S from "./styles";
import { Dispatch, FC, SetStateAction } from "react";

type SearchInputProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchInput: FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <S.Container>
      <input
        id="searchInput"
        type="text"
        placeholder="Procurando por algo específico?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <label htmlFor="searchInput">
        <CiSearch />
      </label>
    </S.Container>
  );
};
