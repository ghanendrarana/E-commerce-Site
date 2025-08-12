import { create } from "zustand";
import { LOCAL_STORAGE_KEYS } from "../constants/util";
import { persist } from "zustand/middleware";

// const cartItems = localStorage.getItem(LOCAL_STORAGE_KEYS.CART)
//   ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CART))
//   : [];

const useCartStore = create(
  persist(
    (set) => {
      return {
        // initial state
        cart: [],

        // functions
        addToCart: (product) =>
          set((state) => {
            const alreadyInCart = state.cart.some(
              (item) => item.id === product.id
            );
            if (alreadyInCart) {
              return state;
            }
            return {
              cart: [...state.cart, product],
            };
          }),

        removeFromCart: (id) => 
          set((state)=>({
            cart: state.cart.filter((product)=> product.id !== id)
          })),

        clearCart: () => set({ cart: []}),
        updateCartItem: () => {},
      };
    },
    {
      name: LOCAL_STORAGE_KEYS.CART,
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
