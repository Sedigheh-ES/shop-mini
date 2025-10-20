import { Product } from '@/types/interfaces'
import Image from 'next/image'
import React from 'react'

interface Props{
    product:Product,
}

export default function ProductCard(props:Props) {
  return (
      <div className='border rounded-lg transition shadow overflow-hidden gap-3'>
          <Image
              src={props.product.imagePath}
              width={300} height={400}
              alt={props.product.name} >
              
              </Image>
         
          <div className='p-2'>
              <h6 className='text-center text-slate-600'>{props.product.name}</h6>
              <p className='text-center text-slate-600'>{props.product.price}$ </p>
              
          </div>
      </div>
      
  )
}
