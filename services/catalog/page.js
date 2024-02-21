// ---------------------------------------- // 
// ----- Данные для страницы каталога ----- //
// ---------------------------------------- //
export const getCatalogPageContent = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/catalog-page?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};


// --------------------- // 
// ----- Категории ----- //
// --------------------- //
export const getCategoriesProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories-products?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};