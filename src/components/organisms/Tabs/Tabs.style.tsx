import styled from 'styled-components';

export const StyledTabsWrapper = styled.div`
    max-width: 500px;
    margin: 100px auto;
    border: 2px solid #3f51b5;

    .MuiTabs-flexContainer button {
        width: 50%;
    }
`;
export const StyledEmployeeFormWrapper = styled.div`
    display: ${(props: { toggleForm: boolean }) =>
        props.toggleForm ? 'block' : 'none'};
`;

export const StyledEmployerFormWrapper = styled.div`
    display: ${(props: { toggleForm: boolean }) =>
        !props.toggleForm ? 'block' : 'none'};
`;
