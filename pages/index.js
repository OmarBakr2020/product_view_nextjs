/* eslint-disable @next/next/no-img-element */
import { products } from '../products'
import Header from './header'
import { useState } from 'react'

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <Header count={count} />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="flex-shrink-0 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mt-4 flex justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-700">
                    {product.name}
                  </h3>
                  <span className="text-lg leading-6 font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-center">
                  <button
                    className="ml-3 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg"
                    type="button"
                    onClick={() => {
                      setCount(count + 1);
                    }
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
