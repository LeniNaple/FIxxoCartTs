import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'




const CategoriesView: React.FC = () => {


  window.parent.document.title = 'Categories / Fixxo'

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Categories" />
      <FooterSection />
    </>
  )
}

export default CategoriesView

