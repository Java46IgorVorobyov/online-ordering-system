import {ItemData} from "./item-data";

export enum statuses {
    created,
    inProgress,
    shipped,
    delivered,
    cancelled,
};

export type OrderData = {
    orderId: number | string,
    orderItem: ItemData[],
    userId: string,
    deliveryAddress: string,
    lastEditionDate: Date,
};