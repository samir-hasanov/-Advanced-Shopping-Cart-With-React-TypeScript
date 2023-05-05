import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";
import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface IProps {
  id: number;
  quantity: number;
}

interface IPropsItem {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
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
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "1rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "1rem" }}>
          {formatCurrency(item?.price)}
        </div>
      </div>
    </Stack>
  );
};

export default CartItem;
