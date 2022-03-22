import React from 'react'
import ProductType from './types/product';

type ProductsTypeManager = {
    products: ProductType[];
    onRemove : (id : number) => void
}
const ProductManager = ({ products,onRemove }: ProductsTypeManager) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() =>{onRemove(item.id)}}>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager