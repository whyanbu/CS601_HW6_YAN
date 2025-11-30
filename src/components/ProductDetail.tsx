import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext"
import "./ProductDetail.css"
import { useEffect, useState } from "react";

interface RouteParams {
    id: string;
}

const ProductDetail:React.FC = () => {

    const { id } = useParams<keyof RouteParams>() as RouteParams;
    const { products, loading } = useProducts();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!loading) {
            setShowContent(true);
        }
    }, [loading]);

    if (loading) return <div>Loading...</div>;

    const product = products.find(p => p.SKU === id);
    if (!product) return <h1>User Not Found</h1>;

    return (
        <div className={`product-detail-wrap ${showContent ? "fade-in" : ""}`}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} width="200"/>
            <div>SKU: {product.SKU}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: ${product.price.toFixed(2)}</div>
            <Link className="btn" to="/">Back to Home</Link>
        </div>
    );
};

export default ProductDetail;