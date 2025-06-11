import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('No se puede utilizar el contexto');
  }

  return context;
};
