import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types";

interface ProductContextType {
    products: Product[],
    loading: boolean
};

const ProductContext = createContext<ProductContextType>({ products: [], loading: true });

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/inventory.json");
            const data: Product[] = await response.json();
            setProducts(data);
            setLoading(false);
        };
        fetchItems();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);