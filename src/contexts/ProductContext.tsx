import { createContext } from 'react'
import { useContext, useState } from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    flash: ProductItem[]
    get: (articleNumber: string) => void
    getProducts: (take?: number) => void
    getFeatured: (take?: number) => void
    getFlash: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
      
    const baseUrl: string = 'https://win22-webapi.azurewebsites.net/api/products'
    const EMPTY_PRODUCT: ProductItem = { articleNumber: "", name: "", price: 0, category: "", imageName: ""}

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [flash, setFlash] = useState<ProductItem[]>([])
  
    const get = async ( articleNumber: string ) => {
        const res = await fetch(baseUrl + `/${articleNumber}`)
        setProduct(await res.json())
    }

    const getProducts = async (take: number = 0) => {
        let url = baseUrl
        if (take !== 0){
            url = baseUrl + `?take=${take}`
        }
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = baseUrl + `?tag=featured`

        if (take !== 0){
            url += `?take=${take}`
        }
        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlash = async (take: number = 0) => {
        let url = baseUrl
        if (take !== 0){
            url = baseUrl + `?take=${take}`
        }
        const res = await fetch(url)
        setFlash(await res.json())
    }


    return <ProductContext.Provider value={{product, products, featured, flash, get, getProducts, getFeatured, getFlash}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider