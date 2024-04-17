import ProductAuth from './product-auth';
import ProductNotAuth from './product-not-auth';

export default function CatalogItemCategory({ favoritesItems, product }) {
    if(favoritesItems != null) {
        if(favoritesItems.error) {
            return (
                <ProductNotAuth product={ product } />
            )
        }
        else {
            return (
                <ProductAuth favoritesItems={ favoritesItems } product={ product } />
            )
        }
    }
    else {
        return (
            <ProductNotAuth product={ product } />
        )
    }
}