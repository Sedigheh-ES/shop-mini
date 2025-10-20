import { Product } from '@/types/interfaces'
import React from 'react'

interface Props{
    product:Product,
}

export default function ProductCard(props:Props) {
  return (
      <div className='border'>{props.product.name}</div>
  )
}
