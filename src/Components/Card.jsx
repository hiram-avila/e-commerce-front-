import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ProductsContext from '../context/ProductsProvider';
import CartContext from '../context/CartProvider';

const Card = ({ product }) => {
  const { title, price, category, image, id } = product;
  const { addCart } = useContext(CartContext);
  const [active, setActive] = useState(false);

  const producto = {
    id,
    title: title,
    price: price,
    category: category,
    image: image,
  };
  const MAX_WORDS = 2;
  const words = title.split(' ');
  const limitedTitle = words.slice(0, MAX_WORDS).join(' ');

  return (
    <div className="bg-white flex flex-col h-full border">
      <div className="relative overflow-hidden rounded-xl p-5 flex-grow">
        <Link to={`product/${id}`}>
          <div className="w-full h-48 flex items-center justify-center overflow-hidden">
            <img src={image} alt="Product Photo" className="object-contain h-full w-full" />
          </div>
        </Link>
      </div>

      <div className="h-15 px-5">
        <Link to={`product/${id}`} className="text-gray-800 text-base">{limitedTitle}</Link>
        <p className="mt-1 pb-1 text-base text-gray-600">{category}</p>

        <div className="flex justify-between">
          <Link to={`product/${id}`} className="text-base text-blue-600 font-bold">${price}</Link>

          <div className={`rounded-lg ${!active ? 'bg-blue-500' : 'bg-green-400'} px-2 pt-1 text-white duration-100 mb-2`}>
            <button
              id="button"
              name="carrito"
              onClick={() => {
                addCart(producto);
                setActive(!active); 
              }}
              aria-label={active ? 'Remove from cart' : 'Add to cart'}
              title={active ? 'Remove from cart' : 'Add to cart'}
            >
              {
                !active
                  ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  )
                  : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
