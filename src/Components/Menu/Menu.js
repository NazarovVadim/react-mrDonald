import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem'
import bannerImage from '../../Image/banner.png';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
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

export const Menu = ({ setOpenItem }) => {
    
    const res = useFetch();
    const dbMenu = res.response;


    return (
        <MenuStyled>
            <BannerMenu src={bannerImage} alt="banner"/>
            {res.response ? 
                <>
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
                </> : res.error ? <div>Sorry, we will fix it soon</div> : <div>Loading...</div>
            }
        </MenuStyled>
    );
}