import React from 'react'
import Portal from '../Portal'
import './Modal.css'
const Modal = ({
    inputValue, onChange, inputPlaceholder, onClose, editFoo, isEdited
}) => {
    function onKeyPress(e) {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }
    function onSubmit() {
        editFoo();
        onClose();
    }

    function handleClick(e) {
        if (e.target.className === 'modal__overlay' ) {
            onClose();
        }
    }
    return (
        <>
            {isEdited &&
                (
                    <Portal>
                        <div className="modal__overlay" onClick={handleClick}>
                            <div className="modal">
                                <input onKeyPress={onKeyPress}
                                    value={inputValue}
                                    onChange={onChange}
                                    placeholder={inputPlaceholder}
                                    className="modal__input" type="text" />
                                <div className="modal__button-container">
                                    <button
                                        onClick={onClose}
                                        className="modal__close">Close</button>
                                    <button
                                        onClick={onSubmit}
                                        className="modal__rename">Rename</button>
                                </div>
                            </div>
                        </div>
                    </Portal>
                )
            }
        </>
    )
}

export default Modal;