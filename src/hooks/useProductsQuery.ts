import { IProducts } from "@/interface/products.interface";
import { ProductService } from "@/services/product.service";

import { useQuery } from "@tanstack/react-query";

const productService = new ProductService();

export const useProductsQuery = (page?: number) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => productService.getProducts(page),
        enabled: false,
    });
};
