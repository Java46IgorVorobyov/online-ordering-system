import React from "react";
import {BasketData} from "../models/basket-data";
import {useSelector} from "react-redux";
import {basketSelector} from "../redux/store";
import {Button} from "@mui/material";

type AddOrderForm = {
    addOrderFn: (basket: BasketData) => void
}

const AddOrderForm: React.FC<AddOrderForm> = (props) => {
    const {addOrderFn} = props;
    const basket = useSelector(basketSelector);
    console.log('basket', basket);
    return (
        <Button onClick={() => addOrderFn(basket)}>add my basket</Button>
    )
}

export default AddOrderForm;