import React from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./pages/login"
import product from "./pages/product"
import Customer from "./pages/customer"
import transaction from "./pages/transaction"
import Home from "./pages/home"
import Admin from "./pages/admin"

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/product' component={product} />
			<Route path='/customer' component={Customer} />
			<Route path='/transaction' component={transaction} />
			<Route path='/admin' component={Admin} />
		</Switch>
	)
}

export default App
