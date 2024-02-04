import { ProductService } from "@/product.servise";

import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
    const productService = new ProductService();

    return useQuery({
        queryKey: ["products"],
        queryFn: () => productService.getProducts(),
    });
};
