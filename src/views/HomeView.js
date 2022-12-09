import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext } from '../contexts/ProductContext'
import ContactSection from '../sections/ContactSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleSectionLeft from '../sections/FlashSaleSectionLeft'
import FlashSaleSectionRight from '../sections/FlashSaleSectionRight'
import ShowcaseSection from '../sections/ShowcaseSection'

const HomeView = () => {
  const {products, getProducts} = useProductContext()
  const {flash, getFlash} = useProductContext()

  window.parent.document.title = 'Fixxo.'

  useEffect (() => {
    getProducts(8)
    getFlash(4)
  }, [])


  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
        <ShowcaseSection />
      </div> 
      <ProductGridSection title="Featured Products" items={products} />
      <BannerSection />
      <FlashSaleSectionLeft btnTitle="FLASH SALE" items={flash} />
      <FlashSaleSectionRight btnTitle="FLASH SALE" items={flash} />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView