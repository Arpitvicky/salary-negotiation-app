import React from 'react';
import Form from '.';
import { StoreDataContext } from '../../../provider';
const EmployerForm = () => {
    const { dispatch } = React.useContext(StoreDataContext);
    const handleFormSubmit = (amount: number) => {
        dispatch({
            type: 'SET_EMPLOYER_FORM_DATA',
            payload: amount,
        });
    };
    return <Form title="Employer Form" onSubmit={handleFormSubmit} />;
};
export default EmployerForm;
