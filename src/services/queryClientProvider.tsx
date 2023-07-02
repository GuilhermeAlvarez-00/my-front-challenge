"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

type QueryClientProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: QueryClientProps) => {
  return <Provider client={queryClient}>{children}</Provider>;
};
