import { useEffect, useState, type ReactNode } from "react";
import type { Product } from "../types";

interface Props {
    children: (data: { products: Product[] }) => ReactNode
}

const ProductLoader: React.FC<Props> = (props: Props) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/inventory.json");
            const data: Product[] = await response.json();
            setProducts(data);
        };
        fetchItems();
    }, []);
    
    return (
        <>
            {props.children({ products })}
        </>
    );
};

export default ProductLoader;