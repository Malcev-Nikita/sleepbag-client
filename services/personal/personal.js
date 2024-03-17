export const userInfo = async (jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, { 
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    });
  
    if (!response.ok) {
        return null
    }
  
    return response.json();
};


export const userInfoUpdate = async (jwt, userId, data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/${userId}`, { 
        cache: 'no-store',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify(data)
    });
  
    if (!response.ok) {
        return null
    }
  
    return response.json();
};