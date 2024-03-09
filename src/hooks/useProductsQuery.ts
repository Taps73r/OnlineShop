import { ProductService } from "@/services/product.service";

import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
    const productService = new ProductService();

    return useQuery({
        queryKey: ["products"],
        queryFn: () => {
            const response = productService.getProducts();
            return response;
        },
    });
};
