import { productType } from "./shop-items";

export type cartItemType = productType & {
    quantity: number;
    };

export type cartType = cartItemType[];

    export const fetchCart = async (): Promise<cartType> => {
        const data = await JSON.parse(localStorage.getItem("cart") || "[]");
        return data;
    }