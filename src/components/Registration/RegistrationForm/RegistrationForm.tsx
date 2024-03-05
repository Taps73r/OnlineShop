"use client";

import "./RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { IRegisterFields } from "@/interface/authorization.interface";
import { ErrorForm } from "@/components/common/ErrorForm";

interface IRegistrationFormProps {
    registerErrors: string;
}

export function RegistrationForm({
    registerErrors,
}: IRegistrationFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFields>();

    const onSubmit: SubmitHandler<IRegisterFields> = (data) => alert(data.name);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            <div className="register-form__text">
                <h1>Sign Up</h1>
            </div>
            <div className="register-form__name">
                <label>Name</label>
                <input
                    placeholder="enter your name here"
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
                {errors.name && <ErrorForm message={errors.name.message} />}
            </div>
            <div className="register-form__email">
                <label>Email</label>
                <input
                    placeholder="enter your e-mail here"
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
                {errors.email && <ErrorForm message={errors.email.message} />}
            </div>
            <div className="register-form__password">
                <label>Password</label>
                <input
                    placeholder="enter your password here"
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
                {errors.password && (
                    <ErrorForm message={errors.password.message} />
                )}
            </div>
            <div className="register-form__btn">
                <button>Submit</button>
            </div>
        </form>
    );
}
