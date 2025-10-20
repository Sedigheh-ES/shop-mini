import { useAppSelector } from '@/pages/store/store'
import { CartItem } from '@/types/interfaces'
import React from 'react'
import CartItemsPage from './CartItemsPage'


export default function Cartpage() {
    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    )
    return (     
        <div className='p-2'>
            {cartItems.map((item) => (
                < CartItemsPage cartItem={item}/>
            ))
            }
            
       </div>
  )
}
