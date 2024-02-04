"use client";

import { useProductsQuery } from "@/hooks/useProductsQuery";

function Product() {
    const productQuery = useProductsQuery();

    switch (true) {
        case productQuery.isError:
            return <>error</>;
        case productQuery.isFetching:
            return <>fetching</>;
        default:
            return (
                <div>
                    <h1>Products</h1>
                </div>
            );
    }
}

export default Product;
