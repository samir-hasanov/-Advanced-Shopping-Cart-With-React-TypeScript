import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface IPropsIsOpen {
  isOpen: boolean;
}

const ShoppingCart: React.FC<IPropsIsOpen> = ({ isOpen }) => {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        hello Shopping Cart
        <Offcanvas.Title>CartS</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
