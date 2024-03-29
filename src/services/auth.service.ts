import { ICredentials, IUserData } from "@/interface/authorization.interface";
import axios from "axios";

class AuthService {
    private URL = `http://localhost:8080/auth`;

    async loginUser(credentials: ICredentials) {
        return await axios.post(`${this.URL}/authenticate`, credentials);
    }

    async registerUser(userData: IUserData) {
        return await axios.post(`${this.URL}/register`, userData);
    }
}

export { AuthService };
