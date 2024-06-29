"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, incrementQuantity, decrementQuantity } from '@/store/Slices/Cart';
import Link from 'next/link';

interface IProps {
    singleProductDetails: any;
}

const SingleProductDetails = ({ singleProductDetails }: IProps) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.Cart.cart);
    const productInCart = cart.find((item) => item.id === singleProductDetails.id);
    const [quantity, setQuantity] = useState(productInCart ? productInCart.quantity : 1);

    useEffect(() => {
        if (productInCart) {
            setQuantity(productInCart.quantity);
        }
    }, [productInCart]);

    const handleAddToCart = () => {
        dispatch(addToCart({ ...singleProductDetails, quantity }));
    };

    const handleIncrement = () => {
        if (productInCart) {
            dispatch(incrementQuantity({ id: singleProductDetails.id }));
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            if (productInCart) {
                dispatch(decrementQuantity({ id: singleProductDetails.id }));
            } else {
                setQuantity(quantity - 1);
            }
        }
    };

    return (
        <div className="font-sans">
            <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <Image width={400} height={400} src={singleProductDetails.image} alt="Product" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{singleProductDetails.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${singleProductDetails.price}</p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <div className="flex items-center mt-4 space-x-4">
                            <button
                                type="button"
                                onClick={handleDecrement}
                                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
                            >
                                <svg
                                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                readOnly
                                className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                                value={quantity}
                            />
                            <button
                                type="button"
                                onClick={handleIncrement}
                                className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
                            >
                                <svg
                                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {productInCart ? (
                            <Link href="/cart">
                                <button type="button" className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">View Cart</button>
                            </Link>
                        ) : (
                            <button type="button" onClick={handleAddToCart} className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">Add to Cart</button>
                        )}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">About the item</h3>
                            <p>{singleProductDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDetails;
