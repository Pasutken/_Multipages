import { Outlet } from "react-router"

import Headers from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import "./Layout.css"

function Layout({ tab, setTab, products, carts, setToken, role }) {
  return (
    <div>
      <Headers />
      <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
