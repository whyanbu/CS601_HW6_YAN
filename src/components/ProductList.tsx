import ProductListItem from "./ProductListItem";
import type { Product } from "../types";
import "./ProductList.css";
import { useEffect, useState } from "react";

interface Props {
    products: Product[]
}

const ProductList: React.FC<Props> = (props: Props) => {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(false);
    }, [props.products]);

    return (
        <div>
            <h2>Inventory List</h2>
            <div className={`product-list-wrap ${loading ? "" : "enter-animation"}`}>
                {props.products.map((product: Product) => (
                    <ProductListItem key={product.SKU} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;