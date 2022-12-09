import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import ProductDetails from '../sections/ProductDetails'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC  = () => {
  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

    useEffect(() => {
        productContext.get(id)
    }, [])

  return (
  <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Products" />
      <ProductDetails product={productContext.product} />
      <FooterSection />
  </>
)}

export default ProductDetailsView