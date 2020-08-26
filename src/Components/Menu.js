import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem'
import bannerImage from '../Image/banner.png'

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerMenu = styled.img`
    height: 210px;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <BannerMenu src={bannerImage} alt="banner"/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / напитки</h2>
            <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);