import React from 'react';
import {
    ModalWrapper,
    ModalContent,
    ModalHeader,
    CloseButton,
    ModalBody,
} from './Modal.style';

interface IProps {
    onCloseModal: () => void;
    showModal: boolean;
    headerTitle: string;
    children?: React.ReactNode;
}
const Modal = (props: IProps) => {
    const { onCloseModal, headerTitle, showModal } = props;

    React.useEffect(() => {
        const escKeyHandler = (event: any) => {
            if (event && event.keyCode === 27) {
                onCloseModal();
            }
            return false;
        };
        document.addEventListener('keydown', escKeyHandler, false);
        return function cleanKeyDownListener() {
            document.removeEventListener(
                'keydown',
                escKeyHandler,
                false,
            );
        };
    }, [onCloseModal]);

    return (
        <>
            {showModal ? (
                <ModalWrapper
                    data-testid="modal-content"
                    aria-hidden={!showModal}
                >
                    <ModalContent>
                        <ModalHeader data-testid="modal-header">
                            {headerTitle}{' '}
                        </ModalHeader>
                        <CloseButton
                            data-testid="modal-close-btn"
                            onClick={() => onCloseModal()}
                        >
                            X
                        </CloseButton>
                        <ModalBody data-testid="modal-body">
                            {props.children}
                        </ModalBody>
                    </ModalContent>
                </ModalWrapper>
            ) : null}
        </>
    );
};

export default Modal;
