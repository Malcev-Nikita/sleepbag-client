'use client'

import OrderItem from "@/entities/personal/orders/order-item";
import { getOrdersUser } from "@/services/personal/orders"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function OrdersContent() {
    const [orders, setOrders] = useState(null);
    const productsItems = useSelector(state => state.products.items)
    const userData = useSelector(state => state.user.userData);
    const userJwt = useSelector(state => state.user.userJwt);

    useEffect(() => {
        const fetchOrders = async () => {
            if (userData && userJwt) {
                const userOrders = await getOrdersUser(userData.id, userJwt);
                
                setOrders(userOrders);
            }
        };

        fetchOrders();
    }, [userData]);

    if(userData && userJwt && orders) {
        return (
            <section className="pt-[40px]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-2xl font-[Unbounded] font-bold'>МОИ ЗАКАЗЫ</h2>
                    <p>({orders.data.length})</p>
                </header>
                
                {orders.data.map(order => {
                    return (
                        <OrderItem order={ order } productsItems={ productsItems } />
                    )
                })}
            </section>
        )
    }
}