// ------------------------------- // 
// ----- Заказы пользователя ----- //
// ------------------------------- //
export const getOrdersUser = async (userID) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/orders?filters[user]=${userID}&populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) null;
  
    return response.json();
};