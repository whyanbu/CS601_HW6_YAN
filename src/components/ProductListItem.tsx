import { Link } from "react-router-dom";
import "./ProductListItem.css";
import type { Product } from "../types";

interface Props {
    product: Product
}

const InventoryItem = (props: Props) => {
    return (
        <Link to={`/product/${props.product.SKU}`} className="product-list-item-wrap">
            <div>SKU: {props.product.SKU}</div>
            <div>Name: {props.product.name}</div>
            <div>Quantity: {props.product.quantity}</div>
            <div>Price: ${props.product.price.toFixed(2)}</div>
        </Link>
    );
};

export default InventoryItem;