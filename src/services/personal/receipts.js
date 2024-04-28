// ---------------- // 
// ----- Чеки ----- //
// ---------------- //
export const getReceipts = async (jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/checks?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    });
  
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Unauthorized: Your token is invalid or expired.");
        } else {
            throw new Error("Unable to fetch receipts.");
        }
    }
  
    return response.json();
};