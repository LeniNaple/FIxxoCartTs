import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import CreateProducts from '../CRUD-components/CreateProducts'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import CRUDproductGrid from '../CRUD-components/CRUDproductGrid'





const CRUDView: React.FC = () => {
    const {products, getProducts} = useProductContext() as ProductContextType
    
    useEffect (() => {
        getProducts()
      }, [])

  window.parent.document.title = 'CRUD / Fixxo'

  return (
    <div className='CRUD-products'>
        <MainMenuSection />  
        <BreadCrumbSection currentPage="CRUD" />
        <CreateProducts />
        <CRUDproductGrid title="All Products" items={products} />
    </div>
  )
}

export default CRUDView

