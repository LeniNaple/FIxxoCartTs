import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { NavLink } from 'react-router-dom'

const ProductsView: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  window.parent.document.title = 'Products / Fixxo'

  useEffect (() => {
    getProducts()
  }, [])

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={products} />
      <NavLink className="d-flex justify-content-center m-5" to="/products/CRUD"> Add/Change Products? </NavLink>
      <FooterSection />
    </>
  )
}


export default ProductsView