import { getCookie } from "@/utils/getCookie";
import axios from "axios";

class ProductCategoryService {
    private token = getCookie("accessToken");
    private URL = `http://localhost:8080`;

    async getBigCategoryProducts(page?: number) {
        const response = await axios.get(`${this.URL}/user/category/big`, {
            params: {
                page: page,
            },
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        console.log(response);
    }
}

export { ProductCategoryService };
