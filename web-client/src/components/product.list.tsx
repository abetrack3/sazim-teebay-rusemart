import { Product } from "../shared/types/product.types";
import ProductCard from "./product.card";

export const ProductList: React.FC<{products: Product[], actionsEnabled: boolean, callbackForDelete?: (id: string) => void}> = ({ products, actionsEnabled, callbackForDelete }) => {

    return (
        <>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    actionsEnabled={actionsEnabled}
                    callbackForDelete={async () => callbackForDelete ? await callbackForDelete(product.id) : {}}
                />
            ))}
        </>
    );

}

