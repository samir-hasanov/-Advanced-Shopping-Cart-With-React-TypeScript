import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface IProps {
  id: number;
  quantity: number;
}

const CartItem: React.FC<IProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItem.find((i) => i.id === id);

  if (item === null) return null;

  return (
    <Stack direction="horizontal" className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: " 175px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="m-1">
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted m-2" style={{ fontSize: "1rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "1rem" }}>
          {formatCurrency(Number(item?.price) * quantity)}
        </div>
      </div>
      <div>{formatCurrency(Number(item?.price) * quantity)}</div>
      <div className="m-2">
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(Number(item?.id))}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
