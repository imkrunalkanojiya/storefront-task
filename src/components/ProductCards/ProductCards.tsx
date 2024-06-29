"use client"

import { useEffect } from "react";
import React from "react";
import SingleProductCard from "@/components/SingleProductCard/SingleProducrCard"
import { useAppDispatch } from "@/store/hooks";
import { successAddProducts } from "@/store/Slices/Products";

interface IProps {
    products: any[]
}

const ProductCards = ({ products }: IProps) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(successAddProducts(products))
    }, [])

    return (
        <div className="mx-auto w-full grid lg:grid-cols-4 gap-x-8 gap-y-8">
            {products.map(el => <SingleProductCard key={el.id} productDetails={el} />)}
        </div>
    )
}

export default ProductCards 