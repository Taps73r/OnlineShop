"use client";

import "./RegistrationPage.scss";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { Header } from "@/components/Header/Header";

import { ICredentials, IUserData } from "@/interface/authorization.interface";

import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useRegisterMutation } from "@/hooks/useRegisterMutation";

import { ROUTES } from "@/routes/routes";

export function RegistrationPage() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [errorData, setErrorData] = useState<string>("");
    const router = useRouter();

    const authMutation = useAuthMutation();
    const registerMutation = useRegisterMutation();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // const handleRegister = async (userData: IUserData) => {
    //     registerMutation.mutate(userData, {
    //         onSuccess: (data) => {
    //             const token: string;
    //             //TODO: Доробити реєстрацію, запустити бекенд
    //         },
    //         onError: (error) => {},
    //     });
    // };

    const handleAuth = async (credentials: ICredentials) => {
        authMutation.mutate(credentials, {
            onSuccess: (data) => {
                const token: string = data.data.token;
                document.cookie = `accessToken=${token}; Path=/; Secure; SameSite=None`;
                router.push(ROUTES.home);
            },
            onError: (error) => {
                setErrorData(`${error}`);
            },
        });
    };

    return (
        <div className="registration-page">
            <Header loginPage={true} />
            <div className="registration-page__form-position">
                {isLogin ? (
                    <>
                        <LoginForm
                            authErrors={errorData}
                            handleAuth={handleAuth}
                        />
                    </>
                ) : (
                    <>
                        <RegistrationForm registerErrors="" />
                    </>
                )}
                <div className="registration-page__form-position__toggle">
                    {isLogin ? (
                        <p>you don’t have an account yet?</p>
                    ) : (
                        <p>you already have an account?</p>
                    )}
                    <button onClick={toggleForm}>
                        {isLogin ? "sign up" : "log in"}
                    </button>
                </div>
            </div>
        </div>
    );
}
