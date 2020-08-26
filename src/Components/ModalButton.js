import styled from 'styled-components';

export const ModalButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    padding: 20px 70px;
    border: none;
    background-color: #299B01;
    color: #fff;
    outline: none;
    transition: all .2s;
    &:hover{
        background-color: #64c143;
    }
`;