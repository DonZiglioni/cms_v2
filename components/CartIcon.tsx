"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context'
import Link from 'next/link'
import CartLength from './CartLength'

function CartIcon() {
    const { cart, setCart } = useAppContext()
    const [isEmpty, setIsEmpty] = useState(true)
    const [length, setLength] = useState()

    return (
        <Link href='/shoppingcart'>
            <div>
                <div className={`absolute top-0 right-0 sm:mt-10 sm:mr-10 bg-white rounded-full mt-6 mr-8 ${isEmpty ? null : "border-2 border-green-400"}`}>
                    <Image
                        src="/cart.svg"
                        alt="cart"
                        width={30}
                        height={30}
                        className="" />
                </div>
                <CartLength />
            </div>
        </Link>
    )
}

export default CartIcon