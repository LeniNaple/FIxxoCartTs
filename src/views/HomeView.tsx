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
  const {featured, getFeatured} = useProductContext() as ProductContextType

  window.parent.document.title = 'Fixxo.'

  useEffect (() => {
    getFeatured(8)
  }, [])


  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
        <ShowcaseSection />
      </div> 
      <ProductGridSection title="Featured Products" items={featured} />
      <BannerSection />
      <FlashSaleSectionLeft btnTitle="FLASH SALE" />
      <FlashSaleSectionRight btnTitle="FLASH SALE" />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView

function getFlash(arg0: number) {
  throw new Error('Function not implemented.')
}
function getFeatured(arg0: number) {
  throw new Error('Function not implemented.')
}

