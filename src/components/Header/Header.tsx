import "./Header.scss";

import BasketIcon from "@/assets/icons/basket-icon.svg";
import AvatarIcon from "@/assets/icons/avatar-icon.svg";
import LogOutIcon from "@/assets/icons/logout-icon.svg";

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
                {loginPage ? (
                    <Link
                        href="/registration"
                        className="header__links__sign-up"
                    >
                        <AvatarIcon width={65} height={65} />
                        Sign Up
                    </Link>
                ) : (
                    <>
                        <Link href="/orders" className="header__links__order">
                            <BasketIcon width={65} height={65} />
                            Order
                        </Link>
                        <Link
                            href="/registration"
                            className="header__links__log-out"
                        >
                            <LogOutIcon width={65} height={65} />
                            Log Out
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
