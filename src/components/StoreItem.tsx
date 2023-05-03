import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: React.FC<IProps> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100" key={id}>
      <Card.Img src={imgUrl} height="180pxs" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex justify-content-between align-items-baseline
      mb-4"
        >
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <div className="m-2">
        {quantity === 0 ? (
          <Button
            className="primary w-100"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: "0.5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoreItem;
