import {Button, Container,Nav, Navbar as NavbarBS} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {useShopingCart} from "../context/ShopingCardContext"

export default function Navbar() {
	const { openCart, cartQuantity} = useShopingCart()
	return <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
		<Container>
		<Nav className="me-auto">
		<Nav.Link to="/" as={NavLink}>
			Home
		</Nav.Link>
		<Nav.Link to="/store" as={NavLink}>
			Store
		</Nav.Link>
		<Nav.Link to="/about" as={NavLink}>
			About
		</Nav.Link>
		</Nav>
		<Button 
		onClick={openCart}
		style={{width:"3rem", height:"3rem", position:"relative"}}
		variant="outline-primary" className="rounded-circle"> +
		<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
		style={{color:"white", width:"1.5rem", height: "1.5rem", position: "absolute",
		bottom: 0, right: 0, transform:"translate(25%,25%)"}}>{cartQuantity}</div></Button>
		</Container>
	</NavbarBS>	
}