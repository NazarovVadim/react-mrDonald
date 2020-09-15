import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, OrderTotal, TotalPrice } from '../Order/Order';
import { ModalButton } from '../Slyle/ModalButton';
import { projection } from '../functions/secondaryFunctions';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency } from '../functions/secondaryFunctions';

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const dataRules= {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices']
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(dataRules));
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
}


export const Confirm = ({orders, setOrders, authentication, setOpenOrderConfirm, firebaseDatabase }) => {
    const database = firebaseDatabase();
    console.log(orders);
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <OrderTotal>
                    <span>Итого: </span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </OrderTotal>
                <ModalButton onClick={() => {sendOrder(database, orders, authentication); setOrders([]); setOpenOrderConfirm(false)}}>Подтвердить</ModalButton>
            </Modal>
        </Overlay>
    )

}
