import { ICredentials } from "@/interface/authorization.interface";
import { AuthService } from "@/services/auth.service";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAuthMutation = (): UseMutationResult<
    AxiosResponse<{ token: string }, any>,
    Error,
    ICredentials,
    unknown
> => {
    const authService = new AuthService();

    return useMutation({
        mutationFn: (
            credentials: ICredentials
        ): Promise<AxiosResponse<{ token: string }>> => {
            const response = authService.loginUser(credentials);
            return response;
        },
    });
};
