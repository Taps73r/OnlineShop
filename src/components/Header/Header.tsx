import "./Header.scss";

import Link from "next/link";

interface IHeaderProps {}

export function Header({}: IHeaderProps) {
    return (
        <header className="header">
            <Link href="/main" className="header__logo-text">
                <p>NAS</p>
                <p className="header__logo-text__rotate">SHOP</p>
            </Link>
            <div className="header__buttons"></div>
        </header>
    );
}
