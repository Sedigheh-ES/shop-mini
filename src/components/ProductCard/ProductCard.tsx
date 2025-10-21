import { Product } from '@/types/interfaces'
import Image from 'next/image'
import React from 'react'
import AddToCardBtn from '../AddtoCard/AddToCardBtn'

interface Props{
    product:Product,
}

export default function ProductCard(props:Props) {
  return (
      <div className='border rounded-lg transition shadow overflow-hidden gap-3 flex flex-col justify-center w-[350px]'>
          <Image
              src={props.product.imagePath}
              width={300} height={300}
              alt={props.product.name} >       
              </Image>        
          <div className='p-2 flex justify-between'>
              <h6 className='text-center text-slate-600'>{props.product.name}</h6>
              <p className='text-center text-slate-600'>{props.product.price}$ </p>
              <AddToCardBtn product={props.product}/>
              
          </div>
      </div>
      
  )
}
