import ProductListItem from "./ProductListItem";
import type { Product } from "../types";
import "./ProductList.css";
import ProductLoader from "./ProductLoader";
import { useEffect, useState } from "react";

const ProductList = () => {

    const [loading, setLoading] = useState(true);
    
    return (
        <ProductLoader>
            {({ products }) => {

                useEffect(() => {
                    setLoading(false);
                }, [products]);

                return (
                    <div>
                        <h2>Inventory List</h2>
                        <div className={`product-list-wrap ${loading ? "" : "enter-animation"}`}>
                            {products.map((product: Product) => (
                                <ProductListItem key={product.SKU} product={product} />
                            ))}
                        </div>
                    </div>
                );
            }}
        </ProductLoader>
    );
};

export default ProductList;