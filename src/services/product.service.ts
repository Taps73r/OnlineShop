import { IProducts } from "@/interface/products.interface";
import { getCookie } from "@/utils/getCookie";
import axios from "axios";

class ProductService {
    private URL = `http://localhost:8080`;
    private token = getCookie("accessToken");

    async getProducts(page?: number): Promise<IProducts> {
        const response = await axios.get(`${this.URL}/network_drives`, {
            params: {
                page: page,
            },
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        return response.data as IProducts;
    }
}

export { ProductService };
