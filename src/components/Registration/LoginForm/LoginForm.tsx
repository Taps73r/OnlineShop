"use client";

import "./LoginForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import {
    ICredentials,
    ILoginFields,
} from "@/interface/authorization.interface";
import { ErrorForm } from "@/components/common/ErrorForm";

interface ILoginFormProps {
    authErrors: string;
    handleAuth: (credentials: ICredentials) => void;
}

export function LoginForm({
    authErrors,
    handleAuth,
}: ILoginFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFields>();

    const onSubmit: SubmitHandler<ILoginFields> = (data) => {
        handleAuth(data as ICredentials);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h1>Login</h1>
            <div className="login-form__email">
                <label>Email</label>
                {errors.email && <ErrorForm message={errors.email.message} />}
                <input
                    {...register("email", {
                        required: "Email is required field",
                        maxLength: {
                            value: 30,
                            message: "Email cannot exceed 30 characters",
                        },
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Please enter vaild email",
                        },
                    })}
                    type="text"
                />
            </div>
            <div className="login-form__password">
                <label>Password</label>
                {errors.password && (
                    <ErrorForm message={errors.password.message} />
                )}
                <input
                    {...register("password", {
                        required: "Password is required field",
                        maxLength: {
                            value: 30,
                            message: "Password cannot exceed 30 characters",
                        },
                        minLength: {
                            value: 5,
                            message:
                                "Password must be at least 5 characters long",
                        },
                    })}
                    type="text"
                />
            </div>
            <div className="login-form__btn">
                <button>Log In</button>
            </div>
        </form>
    );
}
