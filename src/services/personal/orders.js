// ------------------------------- // 
// ----- Заказы пользователя ----- //
// ------------------------------- //
export const getOrdersUser = async (userID, jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/orders?filters[user]=${userID}&populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    });
  
    if (!response.ok) null;
  
    return response.json();
};


// ------------------------------------ // 
// ----- Заказ пользователя по id ----- //
// ------------------------------------ //
export const getOrderUser = async (userID, orderId, jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/orders?filters[user]=${userID}&filters[id]=${orderId}&populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`, 
        },
    });
  
    if (!response.ok) null;
  
    return response.json();
};


// --------------------------- // 
// ----- Статусы заказов ----- //
// --------------------------- //
export const getStatusOrder = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/orders-status?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) null;
  
    return response.json();
};