import { getCookie } from "@/utils/getCookie";
import axios from "axios";

class ProductService {
    private URL = `http://localhost:8080`;
    private token = getCookie("accessToken");

    async getProducts() {
        const response = await axios.get(`${this.URL}/network_drives`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        console.log(response.data)
        return response.data;
    }
}

export { ProductService };
