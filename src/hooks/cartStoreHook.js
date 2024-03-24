import { create } from 'zustand';

const useCartStore = create((set) => ({
  products: [],
  addToCart: (product) => set((state) => ({ products: [...state.products, product] })),
  removeFromCart: (productId) => set((state) => ({
    products: state.products.filter(item => item.id !== productId)
  })),
  clearCart: () => set(() => ({ products: [] })),
}));

export default useCartStore;
