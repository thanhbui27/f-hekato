import { StatusOrder, StatusPayment } from "src/types/order"

interface PropsStatusRespone {
    messager : string,
    color : "warning" | "error" | "secondary" | "success" | "default" | "primary" | "info" | undefined
}

export const statusDetails  = (value : string) : PropsStatusRespone  =>   {
    return {
        [StatusOrder.PENDING] :{
            messager :  "Đang chờ xử lý",
            color : "warning"
        },
        [StatusOrder.CANCELED] : {
            messager : "Đơn hàng bị huỷ",
            color : "error" 
        },
        [StatusOrder.FAILED] : {
            messager : "Nhận hàng thất bại",
            color : "error"
        },
        [StatusOrder.CANCELED_PAYMENT] : {
            messager : "Giao dịch bị huỷ",
            color : "error"
        },
        [StatusOrder.ORDER_CONFIRMED] : {
            messager : "Xác nhận đơn hàng",
            color : "success"
        }
    }[value || "pending"] as PropsStatusRespone
}


export const statusPayment  = (value : string) : PropsStatusRespone  =>   {
    return {
        [StatusPayment.NORMAL] :{
            messager :  "khi nhận hàng",
            color : "info"
        },
        [StatusPayment.vnpay] : {
            messager : "Ví VNPAY",
            color : "info" 
        },
        [StatusPayment.MOMO] : {
            messager : "Ví MOMO",
            color : "info"
        }
     
    }[value || "normal"] as PropsStatusRespone
}