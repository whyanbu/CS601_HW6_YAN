import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css"
import { useEffect, useState } from "react";
import type { Product } from "../types";

interface RouteParams {
    id: string
}

interface Props {
    products: Product[]
}

const ProductDetail:React.FC<Props> = (props: Props) => {

    const { id } = useParams<keyof RouteParams>() as RouteParams;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [props.products]);

    const product = props.products.find(p => p.SKU === id);
    if (!product) return <h1>Product Not Found</h1>;

    return (
        <div className={`product-detail-wrap ${loading ? "" : "fade-in"}`}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} className="product-image" />
            <div>SKU: {product.SKU}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: ${product.price.toFixed(2)}</div>
            <Link className="btn" to="/">Back to Home</Link>
        </div>
    );
};

export default ProductDetail;