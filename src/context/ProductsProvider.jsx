import { createContext } from 'react';
import useQuery from '../hooks/useQuery';
import { getAllProducts } from '../services/product-services';
export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const {
    data: productData,
    error,
    isFail,
    isLoading,
    isSuccess,
  } = useQuery({ fetchFn: getAllProducts });

  return (
    <ProductsContext.Provider value={{ productData, error, isFail, isLoading, isSuccess }}>
      {children}
    </ProductsContext.Provider>
  );
}
