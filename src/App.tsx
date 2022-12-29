import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import  Home  from "./pages/Home"
import  Store  from "./pages/Store"
import  Navbar  from "./components/Navbar"
import About from "./pages/About"

function App() {
	return <div>
		<Navbar/>
		<Container className="mb-4">
			<Routes>
				<Route path="/" element ={<Home/>}/>
				<Route path="/store" element ={<Store/>}/>
				<Route path="/about" element ={<About/>}/>
			</Routes>
		</Container>
	</div>
}

export default App
