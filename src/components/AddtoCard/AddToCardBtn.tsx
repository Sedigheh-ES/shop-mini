"use client";
import { decrement, increment, productQtyInCartSelector } from '@/pages/store/cartSlice'
import { useAppSelector } from '@/pages/store/store'
import { Product } from '@/types/interfaces'
import React from 'react'
import { useDispatch } from 'react-redux';
import QtyBtn from '../QtyBtn/QtyBtn';

interface Props{
    product:Product
}
export default function AddToCardBtn(props: Props) {
    const dispatch = useDispatch();
    const qty = useAppSelector(state => productQtyInCartSelector(state, props.product.id));
    if (!qty) return (
        <div className='flex justify-center'>
        <button onClick={()=>dispatch(increment(props.product))} className='bg-blue-600 p-3 text-white rounded-md hover:bg-blue-400'>Add to cart</button>

        </div>
    )

  return (
      <QtyBtn onDecrease={() => dispatch(decrement(props.product))}
             onIcrease={() => dispatch(increment(props.product))}
              qty={qty}
         />
  )
}
