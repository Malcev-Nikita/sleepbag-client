export const authUser = async (identifier, password) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: identifier,
            password: password
        })
    });
  
    if (!response.ok) {
        return null
    }
  
    return response.json();
};