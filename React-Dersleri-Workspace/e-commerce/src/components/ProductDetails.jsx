import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

const {id} = useParams();

  return (
    <div>
      ProductDetails {id}
    </div>
  )
}

export default ProductDetail

