import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../models/ProductModels'
import { currencyFormatter } from '../utilities/CurrencyFormatter'

interface CRUDproductType {
    product: ProductItem
}


const CRUDproduct: React.FC<CRUDproductType> = ({product}) => {

  return (

    <div className='card-grid'>
        <div className="carda"> 
            <p>Article Number: <b>{product.articleNumber}</b></p>
            <p>Name: <b>{product.name}</b></p>
            <img src={product.imageName} alt="Nothing here..." />      
            <p>Description: <b>{product.description}</b></p>
            <p>Category: <b>{product.category}</b></p>
            <p>Tag: <b>{product.tag}</b></p>
            <p>Price: <b>{currencyFormatter(product.price)}</b>, Old Price: <b>{product.oldPrice}</b></p>
            <p>Rating: <b>{product.rating}</b></p>
            <NavLink to={`/products/CRUD/${product.articleNumber}`} className="btn-theme-red">Change this product?</NavLink>
        </div> 
    </div>

  )
}

export default CRUDproduct