import { TotalPriceSelector, totalCartItemsSelector } from '@/pages/store/cartSlice';
import { useAppSelector } from '@/pages/store/store';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { relative } from 'path';


interface Props{
    className?: string;
}

export default function Cartbtn(props: Props) {
    const totalItems = useAppSelector(totalCartItemsSelector);

  return (
      <div className={`${props.className} relative`}> 
          <ShoppingCartIcon className='w-12 h-12' />
          {!!totalItems &&
              <div className='bg-red-500 text-white w-8 h-8 rounded-full text-center flex justify-center items-center absolute -top-3 -right-3'>{totalItems} </div>}
          
      </div>
  )
}
