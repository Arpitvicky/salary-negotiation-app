import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
export const StyledTextField = styled(TextField)`
    && {
        height: 40px;

        .MuiInputLabel-outlined {
            transform: translate(14px, 14px) scale(1);
            &.MuiInputLabel-shrink {
                transform: translate(14px, -6px) scale(0.75);
            }
        }
        .MuiOutlinedInput-root {
            height: 100%;
        }
    }
`;
