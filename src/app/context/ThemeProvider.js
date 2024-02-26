"use client"
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const fetchData = async () => {
    try {
      const res = await fetch("https://victorious-triumph-9d05bbd950.strapiapp.com/api/products",{
        headers: {Authorization: `Bearer ${process.env.BEARER_TOKEN}`},
        }
      )
      const data = await res.json()
      setProducts(data.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <ThemeContext.Provider value={{products , cartProducts, setCartProducts}}>{children}</ThemeContext.Provider>
}
