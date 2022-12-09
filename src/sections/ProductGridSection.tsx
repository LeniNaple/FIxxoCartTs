import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'


interface ProductGridType {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridType> = ({title, items = []}) => {

  return (

    <section className='product-grid'>
        <p>{title}</p>
        <div className='container'>
            <div className='grid'>
                
                {
                  items.map( product => <ProductCard key={product.articleNumber} product={product} />)
                }
                
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection