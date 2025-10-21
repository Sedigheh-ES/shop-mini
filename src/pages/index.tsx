
import Header from '@/components/Header/Header'
import { prodcutData } from './mock/productData'
import ProductCard from '@/components/ProductCard/ProductCard'


export default function Home() {
  return (
    <>
      <Header />
    <main className={'container'}>
        <div className='flex '>
          {
            prodcutData.map((item) =>
              <ProductCard key={item.id} product={item} />
            )
          } 
      </div>
    </main>
  
    </>
  )
}
