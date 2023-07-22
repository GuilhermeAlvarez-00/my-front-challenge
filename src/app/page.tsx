"use client";

import { useMemo, useState } from "react";

import { Header } from "@/components/Header";
import { ListProducts } from "@/components/ListProducts";
import { useGetProducts } from "@/hooks/GET/useGetProducts";
import { getTotalPages } from "@/utils/getTotalPages";

const perPage = 12;

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");

  const [page, setPage] = useState(0);

  const params = useMemo(() => {
    return {
      page,
      perPage,
      filter: {
        name: searchInput,
        category: category,
      },
    };
  }, [page, searchInput, category]);

  const { data } = useGetProducts(params);

  const allProducts = data?.allProducts;
  const totalProducts = data?.total;

  const total = getTotalPages(totalProducts, perPage);

  const handleFilterByCategory = (category: string) => {
    setCategory(category);
    setPage(0);
  };

  return (
    <>
      <Header value={searchInput} setValue={setSearchInput} />
      <button onClick={() => handleFilterByCategory("t-shirts")}>
        camiseta
      </button>
      <button onClick={() => handleFilterByCategory("mugs")}>caneca</button>
      <ListProducts
        allProducts={allProducts}
        totalPages={total}
        setPage={setPage}
      />
    </>
  );
}
