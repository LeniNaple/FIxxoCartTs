import React, { useEffect } from 'react'
import ProductGridSection from './ProductGridSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { NavLink } from 'react-router-dom'

interface FlashSaleSectionLeftType {
    btnTitle: string
}


const FlashSaleSectionLeft: React.FC<FlashSaleSectionLeftType> = ({btnTitle}) => {
    const {flash, getFlash} = useProductContext() as ProductContextType

    useEffect (() => {
        getFlash(4)
      }, [])

  return (
    <section className="flash-sale-left container">
        <div className="two-for-left"> 
            <h1>2 FOR USD $29</h1>
            <NavLink to="/products" className="btn-theme-white">
                <div className="line-button-l-1"></div>
                <div className="line-button-l-2"></div>
                <p>{btnTitle}</p>
                <div className="line-button-r-1"></div>
                <div className="line-button-r-2"></div>
            </NavLink>
        </div>
        <div className="two-for-right">
            <ProductGridSection items={flash} />
        </div>
    </section>
  )
}

export default FlashSaleSectionLeft