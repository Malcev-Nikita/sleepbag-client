export const regUser = async (email, surname, name, phone, password) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            email: email,
            password: password,
            surname: surname,
            name: name,
            phone: phone
        })
    });
  
    if (!response.ok) {
        return null
    }
  
    return response.json();
};