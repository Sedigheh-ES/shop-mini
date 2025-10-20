import CartItemsPage from '@/components/CartPage/CartItemsPage'
import Header from '@/components/Header/Header'
import { useAppSelector } from '@/pages/store/store'
import { CartItem } from '@/types/interfaces'
import Link from 'next/link'
import React from 'react'
import { TotalPriceSelector } from './store/cartSlice'



export default function Cartpage() {
    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    )

    const totalPrice = useAppSelector(TotalPriceSelector)
    return (    
        <>
            <Header/>
             <div className='p-2'>
           
            {cartItems.map((item) => (
                <CartItemsPage cartItem={item}/>
            ))
                }
                <div className='flex justify-between items-center mt-5'>
                      <p>Total Price: <span>{totalPrice}$ </span></p>
                      <button className='bg-blue-600 p-3 text-white rounded-md hover:bg-blue-400'>Check out</button>

                </div>
              
            
       </div>
        </>
       
  )
}