"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";
import * as S from "./styles";

type HeaderProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const Header: FC<HeaderProps> = ({ value, setValue }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Flex>
          <Logo />
        </S.Flex>

        <S.Flex>
          <SearchInput value={value} setValue={setValue} />

          <p>icon carrinho</p>
        </S.Flex>
      </S.Wrapper>
    </S.Container>
  );
};
