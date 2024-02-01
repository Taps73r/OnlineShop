import axios from "axios";

class ProductService {

    async getAllProducts() {
        return axios.get("https://jsonplaceholder.typicode.com/todos");
    }
}

export default new ProductService();
