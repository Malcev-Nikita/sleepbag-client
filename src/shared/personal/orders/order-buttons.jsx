export default function OrderButtons({ order }) {
    if(order.attributes.status.data.id == 2) {
        return (
            <div className="flex gap-[16px]">
                <a href="#" className="info_button font-medium px-[36px] py-[10px] text-[20px] rounded-[5px] bg-[#F97316] text-white">
                    Оплатить
                </a>

                <a href={"/personal/orders/" + order.id} className="info_button font-medium px-[51px] py-[10px] text-[20px] rounded-[5px] bg-[#f3f3f3]">
                    Подробнее
                </a>
            </div>
        )
    }
    else {
        return (
            <div className="">
                <a href={"/personal/orders/" + order.id} className="info_button font-medium px-[51px] py-[10px] text-[20px] rounded-[5px] bg-[#f3f3f3]">
                    Подробнее
                </a>
            </div>
        )
    }
}