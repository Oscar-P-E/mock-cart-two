export type productType = {
id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
};

export type productsType = productType[];

export const fetchProducts = async () => {
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
return data;
};
