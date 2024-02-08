"use client";

import "./RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { IRegisterFields } from "@/interface/registration.interface";

export function RegistrationForm(): JSX.Element {
    const { register, handleSubmit } = useForm<IRegisterFields>();
    const onSubmit: SubmitHandler<IRegisterFields> = (data) => alert(data.name);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration</h1>
            <div>
                <input
                    {...register("name", {
                        required: true,
                    })}
                    type="text"
                />
            </div>

            <button>Register</button>
        </form>
    );
}
