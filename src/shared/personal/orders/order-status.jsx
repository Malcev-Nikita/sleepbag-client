export default function OrderStatus({ status }) {
    if(status.data.id == 1) {
        return (
            <p className="text-[#138808] font-semibold">{status.data.attributes.status}</p>
        )
    }
    else if(status.data.id == 2) {
        return (
            <p className="text-[#DC3838] font-semibold">{status.data.attributes.status}</p>
        )
    }
    else if(status.data.id == 3) {
        return (
            <p className="text-[#ADADAD] font-semibold">{status.data.attributes.status}</p>
        )
    }
    else {
        return (
            <p className="font-semibold">{status.data.attributes.status}</p>
        )
    }
}