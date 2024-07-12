import { Product } from "../shared/types/product.types";
import ProductCard from "./product.card";

interface ProductListProps {
    products: Product[];
    actionsEnabled: boolean;
    callbackForDelete?: (id: string) => void;
    callBackForOnClick?: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, actionsEnabled, callbackForDelete, callBackForOnClick }) => {

    return (
        <>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    actionsEnabled={actionsEnabled}
                    callbackForDelete={async () => callbackForDelete ? await callbackForDelete(product.id) : {}}
                    callBackForOnClick={async () => callBackForOnClick ? await callBackForOnClick(product.id) : {}}
                />
            ))}
        </>
    );

}

