"use client";

import "./RegistrationForm.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { IRegisterFields } from "@/interface/registration.interface";

export function RegistrationForm(): JSX.Element {
    const { register, handleSubmit } = useForm<IRegisterFields>();
    const onSubmit: SubmitHandler<IRegisterFields> = (data) =>
        console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    {...(register("name"),
                    {
                        required: true,
                    })}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
        </form>
    );
}
