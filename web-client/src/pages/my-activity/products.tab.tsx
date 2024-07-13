import { ProductList } from "../../components/product.list";
import { Product } from "../../shared/types/product.types";

const ProductsTab: React.FC<{ products: Product[], productListEmptyText: string }> = ({ products, productListEmptyText }) => {

    return (
        <div className="w-full flex flex-col justify-center items-center pt-12">
            {(products.length !== 0) &&
                <div className='flex flex-col items-center gap-4 w-3/5'>
                    <ProductList
                        products={products}
                        actionsEnabled={false}
                    />
                </div>
            }
            {products.length === 0 && <p>{productListEmptyText}</p>}
        </div>
    );
};

export const PurchasedProductsTab: React.FC<{ products: Product[] }> = ({ products }) => {

    return <ProductsTab
        products={products}
        productListEmptyText="You haven't purchased any product yet. Purchase one?"
    />
};

export const SoldProductsTab: React.FC<{ products: Product[] }> = ({ products }) => {

    return <ProductsTab
        products={products}
        productListEmptyText="You aven't sold any product yet"
    />
};

export const BorrowedProductsTab: React.FC<{ products: Product[] }> = ({ products }) => {

    return <ProductsTab
        products={products}
        productListEmptyText="You haven't borrowed any product yet"
    />
};

export const OfferedProductsTab: React.FC<{ products: Product[] }> = ({ products }) => {

    return <ProductsTab
        products={products}
        productListEmptyText="You haven't offered any product yet"
    />
};


