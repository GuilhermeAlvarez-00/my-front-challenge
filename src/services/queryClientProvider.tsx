"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

type QueryClientProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: QueryClientProps) => {
  return (
    <Provider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Provider>
  );
};
