import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Transactions from "./pages/transactions/Transactions";

function App() {
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <>
          <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
          {admin && <Topbar />}
          <div className="container">
            {admin && <Sidebar />}
            <Route exact path="/">
              {admin ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/users">
              {admin ? <UserList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/user/:userId">
              {admin ? <User /> : <Redirect to="/login" />}
            </Route>
            <Route path="/newUser">
              {admin ? <NewUser /> : <Redirect to="/login" />}
            </Route>
            <Route path="/products">
              {admin ? <ProductList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/product/:productId">
              {admin ? <Product /> : <Redirect to="/login" />}
            </Route>
            <Route path="/newProduct">
              {admin ? <NewProduct /> : <Redirect to="/login" />}
            </Route>
            <Route path="/transactions">
              {admin ? <Transactions /> : <Redirect to="/login" />}
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
