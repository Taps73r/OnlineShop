"use client";

import "./RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { IRegisterFields } from "@/interface/registration.interface";

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
                <input
                    {...register("name", {
                        required: "Name is required field",
                        maxLength: {
                            value: 20,
                            message: "Name cannot exceed 20 characters",
                        },
                    })}
                    type="text"
                />
                {errors.name && <div>{errors.name.message}</div>}
            </div>
            <button>Register</button>
        </form>
    );
}
