import { CartItem } from '@/types/interfaces';
import Image from 'next/image';
import React from 'react';
import QtyBtn from '../QtyBtn/QtyBtn';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '@/pages/store/cartSlice';

interface Props {
    cartItem: CartItem;
}

export default function CartItemsPage({ cartItem }: Props) {
    const dispatch = useDispatch();
    return (
        <div className='grid grid-cols-4 items-center gap-4 py-2 border'>
            <Image
                src={cartItem.product.imagePath}
                width={300}
                height={300}
                alt={cartItem.product.name}
                className='rounded-lg'
            />

            <p className='text-slate-600 text-xl'>{cartItem.product.name} </p>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-slate-600 text-xl'>{cartItem.product.price}$ </p>
                <p className='text-slate-600 text-xl'>&#xd7; </p>
                <p className='text-slate-600 text-xl'>{cartItem.qty}</p>
                <p> Sum: {cartItem.qty * cartItem.product.price} $</p>
            </div>
            <div>
                <QtyBtn
                    qty={cartItem.qty}
                    onDecrease={() => dispatch(decrement(cartItem.product))}
                    onIcrease={() => dispatch(increment(cartItem.product))}
                />
            </div>

           
        </div>

    )
}
