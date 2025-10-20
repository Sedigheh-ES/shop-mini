import { TrashIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props{
    onIcrease: () => void;
    onDecrease: () => void;
    qty: 1;
}

export default function QtyBtn(props:Props) {
  return (
      <div className='flex gap-2 justify-center items-center'>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md' onClick={props.onDecrease}>
              {props.qty === 1 ?<TrashIcon className='w-3 h-6'/>:"-"}
             
          </button>
          <p>{props.qty}</p>
          <button className='px-4 py-2 bg-sky-500 text-white rounded-md' onClick={props.onIcrease}>+</button>
          
      
      </div>
  )
}
