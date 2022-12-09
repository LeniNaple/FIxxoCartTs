import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import ContactSection from '../sections/ContactSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleSectionLeft from '../sections/FlashSaleSectionLeft'
import FlashSaleSectionRight from '../sections/FlashSaleSectionRight'
import ShowcaseSection from '../sections/ShowcaseSection'

const HomeView = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  window.parent.document.title = 'Fixxo.'

  useEffect (() => {
    getProducts(8)
  }, [])


  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
        <ShowcaseSection />
      </div> 
      <ProductGridSection title="Featured Products" items={products} />
      <BannerSection />
      <FlashSaleSectionLeft btnTitle="FLASH SALE" />
      <FlashSaleSectionRight btnTitle="FLASH SALE" />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView