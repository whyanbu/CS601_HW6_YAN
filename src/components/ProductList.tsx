import ProductListItem from "./ProductListItem";
import type { Product } from "../types";
import "./ProductList.css";
import { useProducts } from "../context/ProductContext";

const InventoryList = () => {

    const { products, loading } = useProducts();

    return (
        <div>

            <h2>Inventory List</h2>
            <div className={`product-list-wrap ${loading ? "": "enter-animation"}`}>
                {products.map((product: Product) => (
                    <ProductListItem key={product.SKU} product={product} />
                ))}
            </div>
        </div>
    );
};

export default InventoryList;