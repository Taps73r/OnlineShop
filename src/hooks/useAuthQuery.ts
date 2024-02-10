import { AuthService } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useAuthQuery = () => {
    const authService = new AuthService();

    return useQuery({
        queryKey: ["user"],
        queryFn: () => authService.loginUser(),
    })
};
