import { get, onValue, push, ref, remove, update } from "firebase/database";
import { createContext, useEffect } from "react";
import { db } from "../config/FirebaseRealdb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RealDBContext = createContext()

const MyDBContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const [editState, setEditProduct] = useState(null)

    const dbRef = ref(db, "product")
    const addProduct = async (data) => {
        await push(dbRef, data)
        alert("Data Added")
    }

    const delProduct = async (id) => {
        await remove(ref(db, `product/${id}`))
        getProduct()
        alert("Deleted")
    }

    const editProduct = async (id) => {
        const data = await get(ref(db, `product/${id}`))
        setEditProduct({ id: data.key, ...data.val() })
        navigate("/addproduct")
    }

    const updateProduct = async (id,data) => {
        await update(ref(db, `product/${id}`),data)
        getProduct()
        setEditProduct(null)
        alert("Updated")
    }

    const getProduct = () => {
        onValue(dbRef, snap => {
            const data = snap.val();
            if (data) {
                const arr = Object.keys(data).map(key => ({
                    id: key, ...data[key]
                }))
                setProduct(arr)
            }
            else {
                setProduct([])
            }
        })
    }

    useEffect(() => {
        getProduct()
    }, [])
    return <>
        <RealDBContext.Provider value={{ product, addProduct, delProduct, editState, editProduct,updateProduct }}>
            {children}
        </RealDBContext.Provider>
    </>
}
export default MyDBContextProvider