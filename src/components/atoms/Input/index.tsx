import React from 'react';
import { StyledTextField } from './Input.style';

interface IProps {
    onChange: (value: number) => void;
    placeholderText?: string;
    required?: boolean;
}

const Input = (props: IProps) => {
    const { onChange, placeholderText, required } = props;
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = Number(
            (event.target as HTMLInputElement).value,
        );
        onChange(value);
    };
    return (
        <StyledTextField
            type="number"
            id="amount"
            data-testid="input-control"
            label={placeholderText}
            required={required}
            variant="outlined"
            onChange={handleChange}
        />
    );
};
Input.defaultProps = {
    required: false,
    placeholderText: 'Enter value',
};
export default Input;
