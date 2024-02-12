// ----------------------------------------- // 
// ----- Добавление товара в избранное ----- //
// ----------------------------------------- //
export const addFavorite = async (jwt, userId, productFavorites) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/1?populate=*`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA3MTg4NjgyLCJleHAiOjE3MDk3ODA2ODJ9.YyDDxq3xl6eWHtXuV1Cw6FFj8tJ8Tqil7BT75QsHvvo',
        },
        body: JSON.stringify({
            "favorites": productFavorites
        })
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};