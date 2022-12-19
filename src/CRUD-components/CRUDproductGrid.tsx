import React from 'react'
import { ProductItem } from '../models/ProductModels'
import CRUDproduct from './CRUDproduct'


interface ProductGridType {
  title?: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridType> = ({title, items = []}) => {

  return (

    <section className='product-gid'>
        <p>{title}</p>
        <div className='container'>
            <div className='grid'>
                
                {
                  items.map( product => <CRUDproduct key={product.articleNumber} product={product} />)
                }
                
            </div> 
        </div> 
    </section>
    
  )
}

export default ProductGridSection