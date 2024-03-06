import "./Header.scss";

import React from "react";

interface IHeaderProps {}

export function Header({}: IHeaderProps) {
    return (
        <header className="header">
            <div className="header__logo-text">
                <p>nas</p>
                <p>shop</p>
            </div>
        </header>
    );
}
