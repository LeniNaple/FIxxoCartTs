import React, { useEffect } from 'react'
import ProductGridSection from './ProductGridSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { NavLink } from 'react-router-dom'

interface FlashSaleSectionRightType {
    btnTitle: string
  }


const FlashSaleSectionRight: React.FC<FlashSaleSectionRightType> = ({btnTitle}) => {
    const {flash, getFlash} = useProductContext() as ProductContextType

    useEffect (() => {
        getFlash(4)
      }, [])

  return (
    <section className="flash-sale-right container">
        <div className="two-for-right">
            <ProductGridSection items={flash} />
        </div>
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
    </section>
  )
}

export default FlashSaleSectionRight