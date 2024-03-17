// ----------------------------------------- // 
// ----- Добавление товара в избранное ----- //
// ----------------------------------------- //
export const addFavorite = async (jwt, userId, productFavorites) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/${userId}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            "favorites": productFavorites
        })
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};