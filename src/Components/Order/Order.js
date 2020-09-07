import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Slyle/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency } from '../functions/secondaryFunctions';
import { projection } from '../functions/secondaryFunctions';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    left: 0;
    max-width:380px;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const dataRules= {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices']
}

export const Order = ({orders, setOrders, setOpenItem, authentication, login, firebaseDatabase }) => {
    const dataBase = firebaseDatabase();

    const sendOrder = () => {
        const newOrder = orders.map(projection(dataRules));
        dataBase.ref('orders').push().set({
            nameClient: authentication.displayName,
            email: authentication.email,
            order: newOrder
        });
    }


    const deleteItem = index => {
        const newOrder = [...orders];
        newOrder.splice(index, 1);
        setOrders(newOrder);
    }

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    const checkout = () => {
        if(authentication){
            sendOrder();
        }else{
            login();
        }
    }

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map((order, index) => <OrderListItem key={index} order={order} deleteItem={deleteItem} index={index} setOpenItem={setOpenItem} />)}
                </OrderList> :
                <EmptyList>Список заказов Пуст</EmptyList>}
            </OrderContent>
            <OrderTotal>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </OrderTotal>
            <ModalButton onClick={checkout}>Оформить</ModalButton>
        </OrderStyled>
    )
}