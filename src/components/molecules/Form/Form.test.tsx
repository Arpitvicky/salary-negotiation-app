import React from 'react';
import {
    render,
    getByTestId,
    fireEvent,
} from '@testing-library/react';
import Form from '.';

describe('<Form />', () => {
    const props = {
        onSubmit: jest.fn(),
        title: 'Employee Form',
    };
    it('should render the Form component with correct title', () => {
        const { container, getByText } = render(<Form {...props} />);
        expect(
            getByText(new RegExp('Employee Form', 'i')),
        ).toBeDefined();
        expect(getByTestId(container, 'form-element')).toBeDefined();
    });
    it('should call onSubmit with correct value when form is submitted', () => {
        const { getByTestId } = render(<Form {...props} />);
        //Input Field
        const InputFieldWrapper = getByTestId('input-control');
        const InputField =
            InputFieldWrapper.childNodes[1].childNodes[0];
        fireEvent.change(InputField, { target: { value: 123 } });
        //Button
        const submitButton = getByTestId('submit-button');

        expect(props.onSubmit).toHaveBeenCalledTimes(0);
        fireEvent.click(submitButton);
        expect(submitButton).toBeDisabled();
        expect(props.onSubmit).toHaveBeenCalledWith(123);
    });
});
