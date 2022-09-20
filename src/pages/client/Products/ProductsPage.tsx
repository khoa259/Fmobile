import React from 'react'
import { ProductsType } from '../../types/ProductsType'

type ProdutcPageProps = {
    product: ProductsType[]
}

const ProductsPage = ({ product }: ProdutcPageProps) => {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {product?.map((prd, index) => (
                            <div className="group relative" key={index}>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img src={prd.img} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {prd.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{prd.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${prd.price}</p>
                                </div>
                                    <button className='bg-red-500 px-2 py-1 text-white '>Add to card</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage