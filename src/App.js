import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./utils/auth";
//import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

// for lazy loading import lazy and suspense from react
const LazyAbout = lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='about'
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path='order-summary' element={<OrderSummary />}></Route>
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured-products' element={<FeaturedProducts />} />
            <Route path='new-products' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />}></Route>
            <Route path='admin' element={<Admin />}></Route>
          </Route>
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
