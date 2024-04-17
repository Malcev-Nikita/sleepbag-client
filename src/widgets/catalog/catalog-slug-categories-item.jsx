import ProductAuth from "@/entities/catalog/product-auth";
import ProductNotAuth from "@/entities/catalog/product-not-auth"

export default function CatalogSlugCategoriesItem({ product, productIndex, categories, favoritesItems }) {
    if (product.id !== productIndex.id) {
        const matchingCategories = product.attributes.categories.data.filter(categorieAll =>
            categories.some(categorie => categorieAll.id === categorie.id)
        );

        if(favoritesItems != null) {
            if(favoritesItems.error) {
                return matchingCategories.map((categorieAll) => (
                    <ProductNotAuth product={ product } key={ categorieAll.id } />
                ));
            }
            else {
                return matchingCategories.map((categorieAll) => (
                    <ProductAuth favoritesItems={ favoritesItems } product={ product } key={ categorieAll.id } />
                ));
            }
        }
        else {
            return matchingCategories.map((categorieAll) => (
                <ProductNotAuth product={ product } key={ categorieAll.id } />
            ));
        }
    }

    return null;
}