import React from 'react';
import {id as AddPostModalId} from './AddPost.modal';
import {selector as MeModalSelector} from './MyAccount.modal';
import {useDispatch, useSelector} from "react-redux";
import {show} from '../redux/Ui';
import {useSocket} from '../hooks/useSocket';

export default function Header()
{
    const dispatch = useDispatch();
    const socket = useSocket();
    const state = useSelector((state) => state);

    return (
        <nav className="Header navbar navbar-expand-lg bg-dark navbar-dark w-100">
            <div className="container-fluid">
                <span className="navbar-brand">Real Talk React App</span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={'Header__right'}>
                        {
                            state.app.connected ? <button className="Header__loginBtn btn btn-outline-danger mt-3 mt-lg-0 me-2" onClick={() => dispatch(show(AddPostModalId))}>
                                Add post
                            </button> : ''
                        }

                        {
                            state.app.connected ? <button className="Header__loginBtn btn btn-outline-danger mt-3 mt-lg-0 me-2" data-bs-toggle="modal" data-bs-target={MeModalSelector}>
                                {state.app.username}
                            </button> : <button className="Header__loginBtn btn btn-danger mt-3 mt-lg-0" onClick={() => {
                                dispatch(show(require('./Login.modal').id));
                            }}>Log in</button>
                        }

                        {
                            state.app.connected ? <button className="Header__loginBtn btn btn-danger mt-3 mt-lg-0" onClick={() => {
                                socket.emit('Logout');
                            }}>Logout</button> : ''
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}