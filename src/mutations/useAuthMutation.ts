import { useMutation } from "@tanstack/react-query";

export const authMutation = useMutation(
    (credentials: ICredentials) => authService.loginUser(credentials),
    {
        onSuccess: () => {
            // Додаткові дії, які виконуються після успішної авторизації
        },
        onError: () => {
            // Обробка помилок під час авторизації
        },
    }
);
