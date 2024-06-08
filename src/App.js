import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Shipping from "./pages/Shipping";
import Order from "./pages/Order";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/signup" exact element={<Register />} />
          <Route path="/profile/*" exact element={<Profile />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/shipping" exact element={<Shipping />} />
          <Route path="/order/*" exact element={<Order />} />
          <Route path="/order/:id" exact element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
