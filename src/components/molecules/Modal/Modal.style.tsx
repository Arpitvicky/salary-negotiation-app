import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding-top: 150px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%;
    @media only screen and (min-width: 768px) {
        width: 35%;
    }
`;

export const ModalHeader = styled.h3`
    color: black;
    margin-bottom: 15px;
    text-align: center;
`;

export const CloseButton = styled.span`
    color: black;
    float: right;
    font-size: 20px;
    position: absolute;
    right: 0;
    padding: 3px 5px;
    top: 0;
    cursor: pointer;
`;
export const ModalBody = styled.div``;
