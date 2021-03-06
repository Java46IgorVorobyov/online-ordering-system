import {PayloadAction} from "@reduxjs/toolkit";
import ErrorCode from "../models/common/error-code";
import {nonAuthorizedUser, UserData} from "../models/common/user-data";
import {SET_ERROR_CODE, SET_CATALOG, SET_USER_DATA, SET_ORDER, SET_BASKET} from "./actions";
import {ProductData} from "../models/product-data";
import {emptyBasket, BasketData} from "../models/basket-data";
import {OrderData} from "../models/order-data";
import errorCode from "../models/common/error-code";

export const userDataReducer = (userData: UserData = nonAuthorizedUser, action: PayloadAction<UserData>): UserData => {
    return action.type === SET_USER_DATA ? action.payload : userData;
}
export const errorCodeReducer = (errorCode: ErrorCode = ErrorCode.NO_ERROR, action: PayloadAction<ErrorCode>): ErrorCode => {
    return action.type === SET_ERROR_CODE ? action.payload : errorCode;
}
export const catalogReducer = (catalog: ProductData[] = [], action: PayloadAction<ProductData[]>): ProductData[] => {
    return action.type === SET_CATALOG ? action.payload : catalog;
}
export const basketReducer = (basket: BasketData = emptyBasket, action: PayloadAction<BasketData>): BasketData => {
    return action.type === SET_BASKET ? action.payload : basket;
}
export const ordersReducer = (orders: OrderData[] = [], action: PayloadAction<OrderData[]>): OrderData[] => {
    return action.type === SET_ORDER ? action.payload : orders;
}