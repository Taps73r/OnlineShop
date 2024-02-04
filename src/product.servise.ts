import axios from "axios";

class ProductService {

    async getProducts() {
        return axios.get("https://jsonplaceholder.typicode.com/todos");
    }
}

export { ProductService };
