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
    poker: ProductItem[]
    get: (articleNumber?: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getFlash: (take?: number) => void
    getPoker: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
      
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: "", articleNumber: "", description: "", name: "", price: 0, category: "", imageName: ""}

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [flash, setFlash] = useState<ProductItem[]>([])
    const [poker, setPoker] = useState<ProductItem[]>([])
  
    const get = async ( articleNumber?: string ) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/product/details/${articleNumber}`)
            setProduct(await res.json())
        } 
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0){
            url += `/${take}`
        }
        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlash = async (take: number = 0) => {
        let url = `${baseUrl}/flash`

        if (take !== 0){
            url += `/${take}`
        }
        const res = await fetch(url)
        setFlash(await res.json())
    }

    const getPoker = async (take: number = 0) => {
        let url = `${baseUrl}/poker`

        if (take !== 0){
            url += `/${take}`
        }
        const res = await fetch(url)
        setPoker(await res.json())
    }

    return <ProductContext.Provider value={{product, products, featured, flash, poker, get, getProducts, getFeatured, getFlash, getPoker}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider