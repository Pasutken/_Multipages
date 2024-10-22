import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ tab, setTab, products, carts, setToken, role }) {
  return (
    <div className="navbar-container mt-4">
      <Link to="/home">
        <button
          className={
            "btn " + (tab === "home" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>

      <Link to="/calcuator">
        <button
          className={
            "btn " + (tab === "calcuator" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("calcuator")}
        >
          Calcuator
        </button>
      </Link>

      <Link to="/animation">
        <button
          className={
            "btn " + (tab === "animation" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>

      <Link to="/components">
        <button
          className={
            "btn " + (tab === "components" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("components")}
        >
          Components
        </button>
      </Link>

      <Link to="/todo">
        <button
          className={
            "btn " + (tab === "todo" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>

      <Link to="/products">
        <button
          className={
            "btn " + (tab === "products" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("products")}
        >
          Producst ({products.length})
        </button>
      </Link>

      <Link to="/carts">
        <button
          className={
            " position-relative btn " +
            (tab === "carts" ? "btn-Light" : "btn-outline-Light")
          }
          onClick={() => setTab("carts")}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "+9"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button className="btn btn-danger" style={{ marginLeft: "0.5rem" }}
      onClick={() => setToken('')}>
        <span className="bi bi-box-arrow-right"></span>
        &nbsp;Logout
      </button>
    </div>
  );
}

export default Navbar;
