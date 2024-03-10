import { IProducts } from "@/interface/products.interface";

import "./ProductContainer.scss";

import Link from "next/link";
import React from "react";

interface IProductContainerProps {
    productData?: IProducts[];
}

export function ProductContainer({
    productData,
}: IProductContainerProps): JSX.Element {
    return (
        <div className="product-container">
            {productData?.map((group, index) => (
                <React.Fragment key={index}>
                    {group.content.map((item) => (
                        <Link
                            href=""
                            key={item.networkDriveId}
                            className="product-container__element"
                        >
                            <p>{item.networkDriveName}</p>
                        </Link>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
