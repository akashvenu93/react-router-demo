import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <input type='text' placeholder='Search' />

      <nav>
        <NavLink to='featured-products'>Featured</NavLink>
        <NavLink to='new-products'>New</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
