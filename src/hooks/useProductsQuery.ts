import { ProductService } from "@/product.servise";

import { useQuery } from "@tanstack/react-query";

const productService = new ProductService();

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => productService.getProducts(),
    });
};
