import React from 'react';
import styled from 'styled-components';
import trashImg from '../../Image/trash.svg';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency } from '../functions/secondaryFunctions';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ItemNameWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

const ToppingName = styled.span`
    font-size: 14px;
    color: #9A9A9A;
`;

export const OrderListItem = ({ order }) => {

    return (
    <OrderItemStyled>
        <ItemNameWrapper>
            <ItemName>{order.name}</ItemName>
        </ItemNameWrapper>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
)}