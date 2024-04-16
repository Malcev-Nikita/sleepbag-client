import CatalogItemCategory from './catalog-item-category';

export default function CatalogItem({ product, category, favoritesItems }) {
    let count = 0;
    
    return (
        product.attributes.categories.data.map(product_category => {
            if((product_category.attributes.slug == category || category == 'all') && count <= 0) {
                count++;

                return (
                    <CatalogItemCategory key={ product.id } favoritesItems={ favoritesItems } product={ product } />
                )
            }
        })
    )
}