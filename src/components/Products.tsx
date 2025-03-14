import React, { useState } from 'react'
import { fetchProductQuery } from '../queries/Queries'

export type Pagination = {
  skip: number
  limit: number
}

export type Product = {
  limit: number
  products: [{
    id: string
    title: string
    description: string
    thumbnail: string
  }]
  skip: number
  total: number
}

function Products() {

  const [pagination, setPagination] = useState<Pagination>({ skip: 0, limit: 10 });

  const { data: products, isFetching, isError } = fetchProductQuery(pagination);

  if (isFetching) {
    return <div>Fetching...</div>
  }

  if (isError) {
    return <div>Error....</div>
  }


  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-wrap gap-x-4 gap-y-4'>
        {products?.products?.map((product, index) => (
          <div key={index} className='bg-zinc-200 flex flex-col w-[200px] h-[250px] min-h-[250px] items-center justify-center'>
            <img className='w-[200px] h-[200px] object-contain' src={product?.thumbnail} />
            <h4>{product.title}</h4>
          </div>)
        )
        }
      </div>
      <div className='flex items-center justify-center'>
        <button className='button-normal' disabled={false} onClick={() => setPagination(prev => ({ ...prev, skip: prev.skip - prev.limit, limit: 10 }))}>Prev</button>
        <button className='button-normal' onClick={() => setPagination(prev => ({ ...prev, skip: prev.skip + prev.limit, limit: 10 }))}>Next</button>
      </div>
    </div >
  )
}

export default Products