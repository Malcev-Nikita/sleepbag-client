// ----------------------------- // 
// ----- Данные для footer ----- //
// ----------------------------- //
export const getFooterContent = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};