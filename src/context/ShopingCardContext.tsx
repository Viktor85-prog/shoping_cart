import { createContext, ReactNode, useContext, useState } from "react";

type ShopingCartProviderProps = {
	children: ReactNode
}

export function useShopingCart() {
	return useContext(ShopingCartContext)
}

type CartItem = {
	id:number
	quantity: number
}
type ShopingCartContext = {
	getItemQuantity:(id:number) => number
	increaseCartQuantity:(id:number) => void
	decreaseCartQuantity:(id:number) => void
	removeFromCart:(id:number) => void
}

const ShopingCartContext = createContext({} as ShopingCartContext)


export function ShopingCartProvider({children}:ShopingCartProviderProps) {
	
	const[cartItems, setCartItems] = useState<CartItem[]>([])
	
	function getItemQuantity(id:number) {
		return cartItems.find(item => item.id === id)?.quantity || 0
	}
	
	function increaseCartQuantity(id:number) {
		setCartItems(currItems => {
			if(currItems.find(item =>item.id === id) == null) {
				return [...currItems, {id, quantity:1}]
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return {...item,quantity:item.quantity + 1}
					} else {
						return item
					}
				})
			}
		})
	}

	function decreaseCartQuantity(id:number) {
		setCartItems(currItems => {
			if(currItems.find(item =>item.id === id)?.quantity === 1) {
				return currItems.filter(item => item.id !==id)
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return {...item,quantity:item.quantity - 1}
					} else {
						return item
					}
				})
			}
		})
	}

	function removeFromCart(id:number) {
		setCartItems(currItems => {
			return currItems.filter(item => item.id !==id)
		})
	}

	return <ShopingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
		{children}
	</ShopingCartContext.Provider>
}