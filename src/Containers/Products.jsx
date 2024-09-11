import React from 'react';
import { featuredProducts } from '../data';
import product1 from '../assets/black.jpg';
import product2 from '../assets/Boots.jpg';
import product3 from '../assets/Gloves.jpg';
import product4 from '../assets/Jacket.jpg';
import product5 from '../assets/Scarf.jpg';
import product6 from '../assets/Sweater.jpg';

const Products = () => {
  const productImages = [product1, product2, product3, product4, product5, product6];

  return (
    <div id='product'
      className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8'>
      
      <div className='flex bg-color2 p-8 rounded-3xl text-2xl w-10/12 h-20 justify-center place-items-center text-center ml-auto'>
        Latest <br /> Collections 
      </div>
      
      <div className='max-w-full bg-color3 text-white flex flex-col gap-8 rounded-3xl h-20 place-items-center text-center w-10/12 p-1'>
        20% Discount on first 100 units on <br /> our winter collection
      </div>
      
      <div className='w-screen h-screen grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
        {featuredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="bg-color3 text-white rounded-xl p-8 flex flex-col items-center justify-center aspect-square overflow-hidden mx-auto group" // Added 'group' class here
          >
            <img
              src={productImages[index]}  
              alt={product.name}
              className='object-cover w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110'

              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
            <div className="flex justify-between items-center opacity-100 group-hover:opacity-90 transition-opacity duration-300">
              <h2 className="text-base">{product.title}</h2>
              <p className="text-lg">
              <span className='text-color1 ml-5'>{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
