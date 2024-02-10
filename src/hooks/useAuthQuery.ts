import { ICredentials } from "@/interface/authorization.interface";
import { AuthService } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useAuthQuery = (credentials: ICredentials) => {
    const authService = new AuthService();

    return useQuery({
        queryKey: ["user"],
        queryFn: () => authService.loginUser(credentials),
    });
};
