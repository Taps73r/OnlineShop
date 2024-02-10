"use client";

import React, { useState } from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";

import "./RegistrationPage.scss";
import axios, { AxiosResponse } from "axios";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import { ICredentials } from "@/interface/authorization.interface";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export function RegistrationPage() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const authService = new AuthService();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="registration-page">
            {isLogin ? (
                <LoginForm authErrors="" handleAuth={handleAuth} />
            ) : (
                <RegistrationForm registerErrors="" />
            )}
            <button onClick={toggleForm}>
                {isLogin ? "Switch to Registration" : "Switch to Login"}
            </button>
        </div>
    );
}
