import "./Header.scss";

import BasketIcon from "@/assets/icons/basket-icon.svg";
import AvatarIcon from "@/assets/icons/avatar-icon.svg";

import Link from "next/link";

interface IHeaderProps {
    loginPage: boolean;
}

export function Header({ loginPage }: IHeaderProps) {
    return (
        <header className="header">
            <Link href="/main" className="header__logo-text">
                <p>NAS</p>
                <p className="header__logo-text__rotate">SHOP</p>
            </Link>
            <div className="header__links">
                <Link href="/orders" className="header__links__order">
                    <BasketIcon width={65} height={65} />
                    Order
                </Link>
                {loginPage ? (
                    <Link
                        href="/registration"
                        className="header__links__sign-up"
                    >
                        <AvatarIcon width={65} height={65} />
                        Sign Up
                    </Link>
                ) : (
                    <Link href="/registration"></Link>
                )}
            </div>
        </header>
    );
}
