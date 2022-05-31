import React from 'react';
import {close} from "../redux/Ui";
import {useSocket} from '../hooks/useSocket';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'react-bootstrap';

export const id = 'LoginModal';
export const selector = `#${id}`;

/**
 * Login modal component.
 *
 * @return {JSX.Element}
 */
export default function LoginModal()
{
    const dispatch = useDispatch();
    const socket = useSocket();
    const state = useSelector((state) => state);

    return (
        <Modal id={id} show={state.ui[id]} onHide={() => dispatch(close(id))} onShow={() => {
            document.querySelector('[name="username"]').focus();
        }}>
            <Modal.Body>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    socket.emit('Login', e.target['username'].value);
                    dispatch(close(id));
                }}>
                    <h5 className="modal-title mb-2">Log in and join the discussion</h5>
                    <div className="mb-2">
                        <input type="text" minLength={4} maxLength={10} className="form-control" name={'username'} placeholder={'Type your username'}/>
                    </div>

                    <button type={'submit'} className={'btn btn-circle px-4 btn-primary'}>Log in</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}