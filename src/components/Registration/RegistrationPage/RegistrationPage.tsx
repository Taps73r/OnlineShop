"use client";

import React, { useState } from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";

import "./RegistrationPage.scss";

export function RegistrationPage() {
    const [isLogin, setIsLogin] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="registration-page">
            {isLogin ? <LoginForm authErrors="" /> : <RegistrationForm registerErrors="" />}
            <button onClick={toggleForm}>
                {isLogin ? "Switch to Registration" : "Switch to Login"}
            </button>
        </div>
    );
}
