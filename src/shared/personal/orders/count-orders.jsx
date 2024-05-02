import { useSelector } from "react-redux";

export default function CountOrders() {
    const userData = useSelector(state => state.user.userData)

    if(userData) {
        return (
            <p>(Количество товаров)</p>
        )
    }
}