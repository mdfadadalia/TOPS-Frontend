import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const list_category = async () => {
        const reps = await axios.get("http://localhost:3000/categories")
        setCategories(reps.data)
    }
    const [products, setProducts] = useState([])
    const list_products = async () => {
        const reps = await axios.get("http://localhost:3000/products?_embed=category")
        setProducts(reps.data)
    }
    const product_filter = async(cateId) => {
        if (cateId == "ALL") {
            list_products()
        }
        else {
            const reps = await axios.get(`http://localhost:3000/products?categoryId=${cateId}&_embed=category`)
            setProducts(reps.data)
        }
    }
    useEffect(() => {
        list_category()
        list_products()
    }, [])
    return <>
        <MyContext.Provider value={{ categories, products, product_filter }}>
            {children}
        </MyContext.Provider>
    </>
}