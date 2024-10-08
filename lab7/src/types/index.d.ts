export interface Scientists {
    id: number;
    first: string;
    last: string;
    year: number;
    passed: number;
}

export interface Products {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

export interface Users {
    id: string;
    username: string;
    password: string;
}