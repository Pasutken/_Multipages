import "./Carts.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-item-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>{cart.price}</Card.Text>

                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  <span className="bi bi-trash"></span>
                  &nbsp;Remove from Carts 
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Products:&nbsp;
        <span className="badge bg-danger">
          {carts.length} items
        </span>
        &nbsp;- Total:&nbsp;
        <span className="badge bg-success">
          ${carts.reduce((p, c) => p + c.price, 0).toFixed(2)}
        </span>
      </h4>

      <button className="btn btn-warning mt-3">
        Checkout&nbsp;
        <span className="bi bi-credit-card"></span>
      </button>
    </div>
  );
}

export default Carts;
