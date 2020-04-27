import React from 'react';
// import { StoreDataContext } from '../../../provider';
import {
    StyledFormWrapper,
    StyledInputWrapper,
    StyledInfo,
} from './Form.style';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

interface IProps {
    onSubmit: (value: number) => void;
    title: string;
}
const Form = ({ onSubmit, title }: IProps) => {
    const [inputValue, setInputValue] = React.useState(0);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(true);
    //Submit handler for form
    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue > 0) {
            onSubmit(inputValue);
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    };
    const handleChange = (amount: number) => {
        setInputValue(amount);
        amount > 0 ? setError(false) : setError(true);
    };
    return (
        <StyledFormWrapper data-testid={'form-element'}>
            <h2>{title}</h2>
            <form onSubmit={formSubmitHandler}>
                {!success && (
                    <StyledInputWrapper>
                        <Input
                            onChange={handleChange}
                            placeholderText={'Enter amount'}
                            required
                        />
                    </StyledInputWrapper>
                )}
                {error && (
                    <StyledInfo>{`Please enter amount greater than 0`}</StyledInfo>
                )}

                <Button
                    buttonText={success ? 'Submitted' : 'Submit'}
                    disabled={success}
                />
            </form>
        </StyledFormWrapper>
    );
};
export default Form;
