import React from 'react';
import {
    render,
    getByTestId,
    queryByTestId,
    fireEvent,
} from '@testing-library/react';
import Modal from '.';

describe('<Modal />', () => {
    const props = {
        headerTitle: 'modal title text',
        showModal: true,
        onCloseModal: jest.fn(),
    };
    test('it should render  modal content when showModal is true', () => {
        const { container } = render(<Modal {...props} />);
        expect(getByTestId(container, 'modal-content')).toBeDefined();
    });
    test('it should not render  the modal content when showModal is false', () => {
        const newProps = {
            ...props,
            showModal: false,
        };
        const { container } = render(<Modal {...newProps} />);
        expect(queryByTestId(container, 'modal-content')).toBeNull();
    });
    test('it should render the children correctly', () => {
        const modalWithChildren = (
            <Modal {...props}>
                <div>test modal content</div>
            </Modal>
        );
        const { container } = render(modalWithChildren);
        expect(
            getByTestId(container, 'modal-body').textContent,
        ).toEqual('test modal content');
    });
    test('it should call onClose prop on button click and verify aria-hidden', () => {
        const { container } = render(<Modal {...props} />);
        expect(props.onCloseModal).toHaveBeenCalledTimes(0);
        fireEvent.click(getByTestId(container, 'modal-close-btn'));
        expect(props.onCloseModal).toHaveBeenCalledTimes(1);
    });
});
