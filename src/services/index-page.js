// --------------------------------------- // 
// ----- Данные для главной страницы ----- //
// --------------------------------------- //
export const getIndexPageContent = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/index-page?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};

// ------------------------------ // 
// ----- Блок "О продукции" ----- //
// ------------------------------ //
export const getProductionContent = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/productions?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};

// ---------------------- // 
// ----- Статистика ----- //
// ---------------------- //
export const getStats = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stats`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};


// ------------------ // 
// ----- Тизеры ----- //
// ------------------ //
export const getTeasers = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/teaser-index?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};


// ------------------------------ // 
// ----- Баннеры на главной ----- //
// ------------------------------ //
export const getBanners = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/banner-header?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};


// ------------------ // 
// ----- Работы ----- //
// ------------------ //
export const getWorks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/works?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) return null;
  
    return response.json();
};