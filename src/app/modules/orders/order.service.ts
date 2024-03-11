import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = ( payload :TOrder)=>{
    const result = Order.create(payload)
    return result;
}

const getAllOrderFromDB = ()=>{
    const result = Order.find()
    return result
}

export const OrderServices={
    createOrderIntoDB,
    getAllOrderFromDB
}