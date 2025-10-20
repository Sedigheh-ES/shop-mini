"use client";
import { productQtyInCartSelector } from '@/pages/store/cartSlice'
import { useAppSelector } from '@/pages/store/store'
import { Product } from '@/types/interfaces'
import React from 'react'

interface Props{
    product:Product
}
export default function AddToCardBtn(props: Props) {
    const qty = useAppSelector(state => productQtyInCartSelector(state, props.product.id));
    

  return (
       <div>
          
      </div>
  )
}
