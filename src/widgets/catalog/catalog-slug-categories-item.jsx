import ProductNotAuth from "@/entities/catalog/product-not-auth"

export default function CatalogSlugCategoriesItem({ product, productIndex, categories, favoritesItems }) {
    if(product.id != productIndex) {
        product.attributes.categories.data.map(categorieAll => {
            categories.map(categorie => {
                if(categorieAll.id == categorie.id) {
                    console.log(product)
                    return (
                        <ProductNotAuth product={ product } />
                    )
                }
            })
        })
    }
}