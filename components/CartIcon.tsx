"use client"
import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context'
import Link from 'next/link'

function CartIcon() {
    const { cart, setCart } = useAppContext()
    return (
        <Link href='/shoppingcart'>
            <div
                className="absolute top-0 right-0 sm:mt-10 sm:mr-10 bg-white rounded-full mt-6 mr-8"

            >
                <Image
                    src="/cart.svg"
                    alt="cart"
                    width={30}
                    height={30}
                    className="" />
            </div>
        </Link>
    )
}

export default CartIcon