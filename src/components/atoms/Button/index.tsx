import React from 'react';
import { default as MUIButton } from '@material-ui/core/Button';
interface IProps {
    buttonText: string;
    disabled: boolean;
}
const Button = ({ buttonText, disabled = false }: IProps) => {
    return (
        <div>
            <MUIButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
                data-testid="submit-button"
            >
                {buttonText}
            </MUIButton>
        </div>
    );
};
export default Button;
