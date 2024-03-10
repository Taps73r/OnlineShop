import { IProducts } from "@/interface/products.interface";
import { ProductService } from "@/services/product.service";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const productService = new ProductService();

export const useProductsQuery = () => {
    return useInfiniteQuery({
        queryKey: ["products"],
        queryFn: ({ pageParam }: { pageParam: number }) =>
            productService.getProducts(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.number + 1,
    });
};
