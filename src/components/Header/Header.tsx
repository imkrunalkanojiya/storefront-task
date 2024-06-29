"use client"

import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useAppSelector } from "@/store/hooks";

const Header = () => {

    const cartData: any[] = useAppSelector((state) => state.Cart.cart)

    return (
        <header className="relative w-full bg-slate-200 flex justify-center">
            <div className="container flex justify-between py-4">
                <Link href="/" className="flex align-middle">
                    <h3 className="text-xl">StoreFront</h3>
                </Link>
                <Link href={`/cart`} className="relative">
                    <IoMdCart className="text-4xl" />
                    {cartData.length > 0 && (
                        <div className="absolute w-5 h-5 top-0 right-0 bg-amber-800 flex justify-center align-middle">
                            <p className="text-white text-sm">{cartData.length}</p>
                        </div>
                    )}
                </Link>
            </div>
        </header>
    )
}

export default Header