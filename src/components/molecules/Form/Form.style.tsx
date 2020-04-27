import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
    form {
        display: flex;
        flex-direction: column;
        button {
            margin-left: auto;
        }
    }
    h2 {
        text-align: center;
        margin: 0 0 10px;
    }
`;
export const StyledInputWrapper = styled.div`
    width: 50%;
    margin-bottom: 10px;
`;
export const StyledInfo = styled.span`
    font-size: 11px;
    font-weight: bold;
    color: red;
    margin-bottom: 10px;
`;
