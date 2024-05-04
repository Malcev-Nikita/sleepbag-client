import OrderButtons from "@/shared/personal/orders/order-buttons";
import OrderStatus from "@/shared/personal/orders/order-status";
import OrderSwiper from "@/shared/personal/orders/order-swiper";

export default function OrderItem({order, productsItems}) {
    return (
        <div className="order rounded-[10px] border-solid border-[1px] my-[30px] w-[80%] border-[#adadad] p-[26px] flex flex-col">
            <div className="flex justify-between mb-[20px] order_name">
                <h3 className="font-[600] text-[20px]">Заказ №{order.id}</h3>
                <div className="flex flex-row text-[20px] gap-[40px]">
                    <p className="font-[600] mobile_none">{order.attributes.cost} ₽</p>
                    
                    <OrderStatus status={ order.attributes.status } />
                </div>
            </div>

            <p className="font-[400] text-[#8d8d8d] text-[18px] mobile_price">{order.attributes.total_amount} ₽</p>

            <div className="flex flex-row items-end justify-between">
                <div className="flex gap-[10px]">
                    <OrderSwiper order={ order } productsItems={ productsItems } />            
                    
                    <div className="mobile_arrow justify-center items-center w-[50%]">
                        <svg width="15" height="20" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14L8 7.5L1 1" stroke="#8D8D8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <OrderButtons order={ order } />
            </div>
            <div className="mobile_block mobile_hr bg-[#cacaca] mt-[30px] w-[100%] h-[2px] "/>
        </div>
    )
}