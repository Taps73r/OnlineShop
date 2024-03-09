"use client"

import { Header } from "@/components/Header/Header";
import "./ProductPage.scss";

import { useProductsQuery } from "@/hooks/useProductsQuery";

export function ProductPage(): JSX.Element {
    const productQuery = useProductsQuery();

    return (
        <div className="product-page">
            <Header loginPage={false} />
            
        </div>
    );
}
