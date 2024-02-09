"use client";

import "./RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { IRegisterFields } from "@/interface/registration.interface";
import { ErrorForm } from "@/components/common/ErrorForm";

export function RegistrationForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFields>();

    const onSubmit: SubmitHandler<IRegisterFields> = (data) => alert(data.name);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration</h1>
            <div>
                <label>Name</label>
                {errors.name && <ErrorForm message={errors.name.message} />}
                <input
                    {...register("name", {
                        required: "Name is required field",
                        maxLength: {
                            value: 20,
                            message: "Name cannot exceed 20 characters",
                        },
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters long",
                        },
                    })}
                    type="text"
                />
            </div>
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
