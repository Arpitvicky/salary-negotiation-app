import React from 'react';
import {
    render,
    getByTestId,
    queryByTestId,
    fireEvent,
} from '@testing-library/react';
import Input from '.';

describe('<Input />', () => {
    const props = {
        onChange: jest.fn(),
        placeholderText: 'Enter amount',
    };
    it('should render  the Input component', () => {
        const { container } = render(<Input {...props} />);

        expect(getByTestId(container, 'input-control')).toBeDefined();
    });
    it('should call onChange with correct value when some value is there', () => {
        const { getByTestId } = render(<Input {...props} />);
        const InputFieldWrapper = getByTestId('input-control');
        const InputField =
            InputFieldWrapper.childNodes[1].childNodes[0];
        expect(props.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(InputField, { target: { value: 123 } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith(123);
    });
});
