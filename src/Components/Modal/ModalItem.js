import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Slyle/ModalButton';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency } from '../functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';


const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    position: relative;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const H1 = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`;

const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount(openItem);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;
    const order = {...openItem, count: counter.count, topping: toppings.toppings, choice: choices.choice };

    const closeModal = e => {
        if(e.target.id === "overlay")
            setOpenItem(null)
    }

    const addToOrder = e => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    const editOrder = e => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }
    
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <Content>
                    <H1> <span>{openItem.name}</span><span>{formatCurrency(openItem.price)}</span></H1>    
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ModalButton onClick={isEdit ? editOrder : addToOrder} disabled={order.choices && !order.choice}>{isEdit ? 'Редактировать' : 'Добавить'}</ModalButton>
                </Content>                                                                                                                                                      
            </Modal>
        </Overlay>
    );
};


