import styled from "styled-components";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const Container = styled.div`
  width: 22rem;
  padding: 0.5625rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f3f5f6;

  &:focus-within {
    outline: 1px solid var(--orange-500);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  input {
    width: 100%;
    height: 100%;
    border: 0;

    background: transparent;
    color: var(--gray-200);

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: var(--gray-200);
      font-family: ${saira.style.fontFamily};
    }
  }
`;
