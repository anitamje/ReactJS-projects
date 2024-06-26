import React from 'react'
import Header from '../Components/Header';
import ProductsContent from '../Components/ProductsContent';

const ProductsPage = () => {
  return (
    <div>
        <Header title="All products" />
        <ProductsContent />
    </div>
  )
}

export default ProductsPage;
