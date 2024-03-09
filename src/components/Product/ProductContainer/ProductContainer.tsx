import { IProduct } from "@/interface/products.interface";
import "./ProductContainer.scss";
import Link from "next/link";

interface IProductContainerProps {
    productData?: IProduct[];
}

export function ProductContainer({
    productData,
}: IProductContainerProps): JSX.Element {
    return (
        <div className="product-container">
            {productData?.map((item) => {
                return (
                    <Link
                        href=""
                        key={item.networkDriveId}
                        className="product-container__element"
                    >
                        <p>{item.networkDriveName}</p>
                    </Link>
                );
            })}
        </div>
    );
}
