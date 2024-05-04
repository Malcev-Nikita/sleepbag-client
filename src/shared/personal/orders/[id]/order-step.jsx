'use client'

import { useEffect, useState } from "react";
import OrderCircle from "./order-circle"

export default function OrderStep({order}) {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        if(order) {
            switch (order.data[0].attributes.status.data.id) {
                case 1:
                    setCount(2)
                    break;

                case 2:
                    setCount(0)
                    break;

                case 3:
                    setCount(4)
                    break;

                case 4:
                    setCount(3)
                    break;

                case 5:
                    setCount(1)
                    break;
            
                default:
                    setCount(0)
                    break;
            }
        }
    })

    return (
        <div className="my-[60px]">
            <div className="mb-[20px] flex flex-row">
                <OrderCircle count={count} />
            </div>
            
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[5px] w-[20%]">
                    <p className="text-[20px] font-normal">Обработка</p>
                </div>
                <div className="flex flex-col gap-[5px] w-[20%]">
                    <p className="text-[20px] font-normal">Сборка заказа</p>
                </div>
                <div className="flex flex-col gap-[5px] w-[20%]">
                    <p className="text-[20px] font-normal">Заказ отправлен</p>
                </div>
                <div className="flex flex-col gap-[5px] w-[20%]">
                    <p className="text-[20px] font-normal">Готов к выдаче</p>
                </div>
                <div className="flex flex-col gap-[5px] w-[20%]">
                    <p className="text-[20px] font-normal">Получен</p>
                </div>
            </div>
        </div>
    )
}