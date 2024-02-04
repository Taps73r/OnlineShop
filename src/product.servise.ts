import axios from "axios";

class ProductService {
    async getProducts() {
        return await axios.get("https://jsonplaceholder.typicode.com/todos");
    }
}

export { ProductService };
