'use client'

import { getOrderUser } from "@/services/personal/orders";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import OrderStep from "@/shared/personal/orders/[id]/order-step";
import OrderItem from "@/entities/personal/orders/[id]/order-item";

export default function OrderContet({ params }) {
    const [order, setOrders] = useState(null);
    const productsItems = useSelector(state => state.products.items)
    const userData = useSelector(state => state.user.userData);
    const userJwt = useSelector(state => state.user.userJwt);

    useEffect(() => {
        const fetchOrders = async () => {
            if (userData && userJwt) {
                const userOrder = await getOrderUser(userData.id, params.id, userJwt);
                
                setOrders(userOrder);
            }
        };

        fetchOrders();
    }, [userData]);

    if(userData && userJwt && order) {
        return (
            <section className="pt-[40px] w-[70%]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-[30px] font-[Unbounded] font-bold'>ИНФОРМАЦИЯ О ЗАКАЗЕ №{params.id}</h2>
                </header>
                
                <OrderStep order={order} />
                
                <div>
                    <hr className="my-[25px] h-[2px] bg-[#000] opacity-20"/>

                    {order.data[0].attributes.products.data.map(product => {
                        return (
                            <OrderItem key={product.id} product={product} productsItems={productsItems} /> 
                        )
                    })}

                    <hr className="my-[25px] h-[2px] bg-[#000] opacity-20"/>
                </div>                

                <div className="pb-[150px]">
                    {order.data[0].attributes.order_date ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Дата заказа:</p>
                            <p>{order.data[0].attributes.order_date.split('-').reverse().join('.')}</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.user.data.attributes.surname && order.data[0].attributes.user.data.attributes.name ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Получатель:</p>
                            <p>{order.data[0].attributes.user.data.attributes.surname + ' ' + order.data[0].attributes.user.data.attributes.name}</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.user.data.attributes.phone ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Номер телефона:</p>
                            <p>{order.data[0].attributes.user.data.attributes.phone}</p>
                        </div>
                    ) : null}
                    
                    {order.data[0].attributes.delivery_service.data ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Служба доставки:</p>
                            <p>{order.data[0].attributes.delivery_service.data.attributes.name}</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.delivery_address ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Адрес доставки:</p>
                            <p>{order.data[0].attributes.delivery_address}</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.delivery ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Стоимость доставки:</p>
                            <p>{order.data[0].attributes.delivery} ₽</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.cost ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">Стоимость заказа:</p>
                            <p>{order.data[0].attributes.cost} ₽</p>
                        </div>
                    ) : null}

                    {order.data[0].attributes.total_amount ? (
                        <div className="flex flex-row gap-[5px] text-[20px]">
                            <p className="font-[600]">К оплате:</p>
                            <p>{order.data[0].attributes.total_amount} ₽</p>
                        </div>
                    ) : null}
                </div>
            </section>
        )
    }
}