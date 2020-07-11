import React from "react"
import "./Style.css"


function App(){
	return(
		<div class="grid-cont">
		<header class="header">
		<div class="brand">
			<a href="index.html">Zenith</a>
			</div>
			<div class="header-links">
			<a href="cart.html">Cart</a>
			<a href="Signin">Sign In</a>
			</div>

		</header>
		<main class="main">
		<ul>
			<li>Product 1</li>
			<li>Product 2</li>
			<li>Product 3</li>
		</ul>
		</main>   
		<footer class="footer">All rights reserved. </footer>
		</div>
		)
}

export default App