"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --orange-500: #FFA585;
    --white-100:  #F3F5F6;
    --white-200: #F0F0F5;
    --white-250:  #E9E9F0;
    --gray-100:  #A8A8B3;
    --gray-200:  #737380;
    --gray-400:  #41414D;
    --black-900: #09090A;
    --red-500: #DE3838;
    --blue-500: #115D8C; 
    --green-500: #51B853;
  }

  body {
    background-color: var(--white-200);
    color: var(--gray-200);
  }

  .text-highlight {
    color: var(--black-900);
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
