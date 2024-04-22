import ProductAuth from '../catalog/product-auth';
import ProductNotAuth from '../catalog/product-not-auth';

export default function CatalogItem({ product, favoritesItems }) {
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