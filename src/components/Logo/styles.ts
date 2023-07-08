import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Container = styled.div`
  h1 {
    font-family: ${sairaStencilOne.style.fontFamily};
    color: #5d5d6d;
  }
`;
