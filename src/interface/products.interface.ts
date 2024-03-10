export interface IProducts {
    content: IProduct[];
    totalPages: number;
    number: number;
}

export interface IProduct {
    networkDriveId: number;
    networkDriveName: string;
    price: number;
    networkDriveInfo: string;
    networkDriveCategory: IProductCategory;
}

export interface IProductCategory {
    id: number;
    categoryName: string;
}
