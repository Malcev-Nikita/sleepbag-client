// --------------------------------------- // 
// ----- Добавление товара в корзину ----- //
// --------------------------------------- //
export const addProductCart = async (jwt, userId, productCart) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/${userId}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            "carts": productCart
        })
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};