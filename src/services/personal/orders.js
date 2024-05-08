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


// ----------------------- // 
// ----- Новый заказ ----- //
// ----------------------- //
export const postOrder = async (jwt, data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/orders`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            data: {
                user: data.user,
                products: data.products,
                cost: data.cost,
                status: data.status,
                total_amount: data.total_amount,
                delivery: data.delivery,
                delivery_address: data.delivery_address,
                order_date: data.order_date,
                delivery_service: data.delivery_service,
                comment: data.comment
            }
        })
    });
  
    if (!response.ok) null;
  
    return response.json();
};