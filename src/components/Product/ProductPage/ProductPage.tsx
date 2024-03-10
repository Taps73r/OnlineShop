"use client";

import { Header } from "@/components/Header/Header";
import "./ProductPage.scss";

import { useProductsQuery } from "@/hooks/useProductsQuery";

import { ProductContainer } from "../ProductContainer/ProductContainer";

export function ProductPage(): JSX.Element {
    const ProductQuery = useProductsQuery();

    const productData = ProductQuery.data?.pages;
    return (
        <div className="product-page">
            <Header loginPage={false} />
            <ProductContainer productData={productData} />
            <button onClick={() => ProductQuery.fetchNextPage()}>More</button>
        </div>
    );
}
