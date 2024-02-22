import { IUserData } from "@/interface/authorization.interface";
import { AuthService } from "@/services/auth.service";

import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRegisterMutation = (): UseMutationResult<
    AxiosResponse<{ token: string }, any>,
    Error,
    IUserData,
    unknown
> => {
    const authService = new AuthService();

    return useMutation({
        mutationFn: (
            userData: IUserData
        ): Promise<AxiosResponse<{ token: string }>> => {
            const response = authService.registerUser(userData);
            return response;
        },
    });
};
