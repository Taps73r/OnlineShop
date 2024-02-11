"use client";

import React, { useState } from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";

import "./RegistrationPage.scss";
import { ICredentials } from "@/interface/authorization.interface";
import { useAuthMutation } from "@/mutations/useAuthMutation";

export function RegistrationPage() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [errorData, setErrorData] = useState<string>("");

    const authMutation = useAuthMutation();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleAuth = async (credentials: ICredentials) => {
        authMutation.mutate(credentials, {
            onSuccess: (data) => {
                const token: string = data.data.token;
                document.cookie = `accessToken=${token}; Path=/; Secure; SameSite=None`;
            },
            onError: (error) => {
                setErrorData(`${error}`);
            },
        });
    };

    return (
        <div className="registration-page">
            {isLogin ? (
                <LoginForm authErrors={errorData} handleAuth={handleAuth} />
            ) : (
                <RegistrationForm registerErrors="" />
            )}
            <button onClick={toggleForm}>
                {isLogin ? "Switch to Registration" : "Switch to Login"}
            </button>
        </div>
    );
}
