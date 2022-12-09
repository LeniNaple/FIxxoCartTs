import React from 'react'
import { ProductItem } from '../models/ProductModels'


interface ProductDetailsType {
  product: ProductItem
}

const ProductDetails: React.FC<ProductDetailsType> = ({product}) => {
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.imageName}</div>
        <div>{product.articleNumber}</div>
        <div>{product.category}</div>
    </div>
  )
}

export default ProductDetails