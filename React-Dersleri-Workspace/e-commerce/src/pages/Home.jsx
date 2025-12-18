import React from "react";
import ProductList from "../components/ProductList";
import PageContainer from "../container/PageContainer";

export default function Home() {
  return (
    <>
      <PageContainer>
        <ProductList />
      </PageContainer>
    </>
  );
}
