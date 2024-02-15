// ------------------------- // 
// ----- Меня в header ----- //
// ------------------------- //
export const getHeaderMenu = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/banner-header`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};

// --------------------------- // 
// ----- Кнопка в header ----- //
// --------------------------- //
export const getHeaderButton = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/button-header`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};