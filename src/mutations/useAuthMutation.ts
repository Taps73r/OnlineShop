import { ICredentials } from "@/interface/authorization.interface";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const authMutation = () => {
    const authService = new AuthService();
    useMutation(
        ["login user"],
        (credentials: ICredentials) => authService.loginUser(credentials),
        {
            
        }
    );
};
