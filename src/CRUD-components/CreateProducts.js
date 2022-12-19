import React from 'react'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const handleSubmit = async (e) => {
  e.preventDefault()

  const product ={
      name: e.target[0].value,
      imageName: e.target[1].value,
      description: e.target[2].value,
      category: e.target[3].value,
      tag: e.target[4].value,
      price: e.target[5].value,
      rating: e.target[6].value,
      oldPrice: e.target[7].value
  }

  const result = await fetch('http://localhost:5000/api/products/', {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      }, 
      body: JSON.stringify(product)
  })
  const data = await result.json()
  console.log(data)
}

const changeProducts = () => {
  return (
    <>
      <div className="container mt-3">
          <h1>Create product</h1>
          <form onSubmit={handleSubmit} >
              <input type="text" className="form-control mb-3" placeholder="Name"></input>
              <input type="text" className="form-control mb-3" placeholder="Image Name"></input>
              <input type="text" className="form-control mb-3" placeholder="Description"></input>
              <input type="text" className="form-control mb-3" placeholder="Category"></input>
              <input type="text" className="form-control mb-3" placeholder="Tag"></input>
              <input type="number" className="form-control mb-3" placeholder="Price"></input>
              <input type="number" className="form-control mb-3" placeholder="Rating"></input>
              <input type="text" className="form-control mb-3" placeholder="Old Price"></input>
              <button type="submit" className="form-control mb-3">Submit</button>
          </form>
      </div>

    </>
  )
}

export default changeProducts