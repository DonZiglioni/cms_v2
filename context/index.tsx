"use client"
import { createContext, useState, useContext } from "react";

type CartProp = {
    product: any;
    variants: any;
}

const AppContext = createContext<any>([]);

export function AppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState([])

    return (
        <AppContext.Provider value={{
            cart,
            setCart,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}