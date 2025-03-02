"use client"
import { useAppContext } from '@/context'
import React, { useState, useEffect } from 'react'

function CartLength() {
    const { cart, setCart } = useAppContext()
    // const [isEmpty, setIsEmpty] = useState(true)
    //const [length, setLength] = useState(0)
    // const checkLen = () => {
    // setLength(cart.length)
    // console.log("LEEENNN", cart.length, length);
    //}

    useEffect(() => {
        //setIsEmpty(!isEmpty)
        // checkLen()
        // console.log("LEEENNN2222", cart.length, length);

    }, [cart, setCart])
    return (
        <div className='text-green-700 text-xl font-bold absolute top-0 right-10 sm:mt-10 sm:mr-10 mt-6 mr-8 z-20'>{cart.length}</div>
    )
}

export default CartLength