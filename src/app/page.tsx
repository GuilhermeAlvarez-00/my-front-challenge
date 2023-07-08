"use client";

import { useState } from "react";

import { Header } from "@/components/Header";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header value={searchInput} setValue={setSearchInput} />
    </>
  );
}
