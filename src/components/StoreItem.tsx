import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: React.FC<IProps> = ({ id, name, price, imgUrl }) => {
  return (
    <Card key={id}>
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
    </Card>
  );
};

export default StoreItem;
