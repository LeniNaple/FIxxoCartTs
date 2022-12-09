import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

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
      <FooterSection />
    </>
  )
}


export default ProductsView