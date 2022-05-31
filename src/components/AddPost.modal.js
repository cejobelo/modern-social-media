import React from 'react';
import {close} from '../redux/Ui';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'react-bootstrap';
import {useSocket} from '../hooks/useSocket';

export const id = 'AddPostModal';
export const selector = `#${id}`;

export default function AddPostModal()
{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const socket = useSocket();

    return (
        <Modal id={id} show={state.ui[id]} onHide={() => dispatch(close(id))} onShow={() => {
            document.querySelector('[name="text"]').focus();
        }}>
            <Modal.Body>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    socket.emit('NewPost', {
                        username: state.app.username,
                        text: e.target['text'].value
                    });
                    dispatch(close(id));
                }}>
                    <h5 className="modal-title mb-3">Join the discussion</h5>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" name={'text'} placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">420 characters maximum</label>
                    </div>

                    <button type={'submit'} className={'btn btn-circle px-4 btn-primary'}>Publish</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}