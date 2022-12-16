import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'
import { currencyFormatter } from '../utilities/CurrencyFormatter'

interface ProductCardType {
    product: ProductItem
}


const ProductCard: React.FC<ProductCardType> = ({product}) => {

    const { increment } = useShoppingCartContext() as ShoppingCartContextType

  return (


        <div className="card">
            <div className="card-box">
                <img src={product.imageName} alt="Nothing here..." />
                <div className="card-interaction">
                    <button className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => increment ({articleNumber: product.articleNumber, product: product, quantity: 1})} className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <div className="card-quick-view">
                    <NavLink to={`/products/details/${product.articleNumber}`} className="btn-theme-red">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                    </NavLink>
                </div>
            </div>

            <div className="card-text">
                <p>{product.category}</p>
                <h1>{product.name}</h1>
                <div className="card-stars" >  
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <h2><span>{product.oldPrice}  </span>{currencyFormatter(product.price)}</h2>
            </div>
        </div> 

  )
}

export default ProductCard