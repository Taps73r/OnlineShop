"use client";

import { Header } from "@/components/Header/Header";
import "./ProductPage.scss";

import { useProductsQuery } from "@/hooks/useProductsQuery";
import { useEffect, useState } from "react";
import { IProduct } from "@/interface/products.interface";
import { ProductContainer } from "../ProductContainer/ProductContainer";

export function ProductPage(): JSX.Element {
    const [page, setPage] = useState<number>(0);

    const ProductQuery = useProductsQuery(page);

    const [productData, setProductData] = useState<IProduct[]>([]);

    useEffect(() => {
        void ProductQuery.refetch();
    }, [page]);

    useEffect(() => {
        if (ProductQuery.data) {
            setProductData((prevData) => [
                ...prevData,
                ...ProductQuery.data.content,
            ]);
        }
    }, [ProductQuery.data?.content]);

    return (
        <div className="product-page">
            <Header loginPage={false} />
            <ProductContainer productData={productData} />
            <button onClick={() => setPage(1)}>More</button>
        </div>
    );
}
