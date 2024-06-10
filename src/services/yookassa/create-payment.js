import YooKassa from 'yookassa';

const yookassa = new YooKassa({
  shopId: process.env.NEXT_PUBLIC_YOOKASSA_SHOP_ID,
  secretKey: process.env.NEXT_PUBLIC_YOOKASSA_SECRET_KEY,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { cost, description } = req.body;

        try {
            const payment = await yookassa.createPayment({
                amount: {
                    value: cost.toFixed(2), // стоимость должна быть строкой в формате "0.00"
                    currency: 'RUB',
                },
                payment_method_data: {
                    type: 'bank_card',
                },
                confirmation: {
                    type: 'redirect',
                    return_url: 'http://localhost:3020/personal/cart/order/access',
                },
                description: description,
            });

            res.status(200).json(payment);
        } 
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    } 
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
