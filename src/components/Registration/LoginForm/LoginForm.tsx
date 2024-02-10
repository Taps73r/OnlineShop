"use client";

import "../RegistrationForm/RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { ILoginFiels } from "@/interface/authorization.interface";
import { ErrorForm } from "@/components/common/ErrorForm";

interface ILoginFormProps {
    authErrors: string;
}

export function LoginForm({ authErrors }: ILoginFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFiels>();

    const onSubmit: SubmitHandler<ILoginFiels> = (data) => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div>
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
            <div>
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
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                            message:
                                "Password must contain at least one uppercase letter, one lowercase letter",
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
            <div>
                <button>Register</button>
            </div>
        </form>
    );
}