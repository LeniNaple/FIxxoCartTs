import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'




const CategoriesView: React.FC = () => {
  
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    

    console.log("stuff")
  }


  window.parent.document.title = 'Categories / Fixxo'

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Categories" />

      <div className='container mt-3'>
          <form onSubmit={handleSubmit} >
              <input type="text" className='form-control mb-3' placeholder='Name'></input>
              <input type="text" className='form-control mb-3' placeholder='Price'></input>
              <input type="text" className='form-control mb-3' placeholder='Description'></input>
              <button type='submit' className='form-control mb-3' >Submit</button>
          </form>
      </div>

      <FooterSection />
    </>
  )
}

export default CategoriesView

