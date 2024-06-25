import {useState, useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios';
import { useForm } from '../Hooks/useForm';
import products from '../utils/constants/products';

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const productosList = products;
    console.log(productosList)
    const [productos, setProducts] = useState(productosList);
    const [mostrar, setMostrar] = useState(false)

    const form = useForm()
    
    return(
        <ProductsContext.Provider
            value={{
              productos,
              mostrar,
              form
            }}
        >
            {children}  
        </ProductsContext.Provider>
    )

  
}

export{
    ProductsProvider
}

export default ProductsContext