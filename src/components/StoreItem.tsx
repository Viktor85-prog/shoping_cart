import { Button, Card } from "react-bootstrap"
import { useShopingCart } from "../context/ShopingCardContext"
import {formatCurrency} from "../utilities/formatCurrency"

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

export default function StoreItem( {id, name, price, imgUrl}: StoreItemProps) {
 
	const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShopingCart()
	const quantity = getItemQuantity(id)
 return <Card className="h-100">
	<Card.Img variant="top" src={imgUrl} height="200px"
	style={{objectFit: "cover"}}/>
	<Card.Body className="d-flex flex-column">
		<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
		<span className="fs-2">{name}</span>
		<span className="fms-2 text-muted">{formatCurrency(price)}</span>
		</Card.Title>
		<div className="mt-auto">
			{quantity === 0 ? (
				<Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+ Add to Card</Button>
			) : <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
				<div className="d-flex align-items-center justify-cintenr-center" style={{gap:".5rem"}}>
				<Button className="" onClick={()=> decreaseCartQuantity(id)}>-</Button>
				<div><span className="fs-3">{quantity}</span> in cart</div>

				<Button className=""  onClick={()=> increaseCartQuantity(id)}>+</Button>
				</div>
				<Button variant="danger" size="sm" onClick={()=> removeFromCart(id)}>Remove</Button>
				</div>}
		
		</div>
	</Card.Body>

 </Card>
}