import React from 'react';
import styled from 'styled-components';
import logoImg from '../../Image/logo.svg';
import loginImg from '../../Image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 19;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ImgLogin = styled.img`
    width:32px;
`;

const Login = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <LogoStyled>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </LogoStyled>
        <Login><ImgLogin src={loginImg} alt="" /> войти</Login>
    </NavBarStyled>
)



