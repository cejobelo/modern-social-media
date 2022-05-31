import React from 'react';
import store from '../store';
import {useDispatch, useSelector} from "react-redux";

export const id = 'MyAccountModal';
export const selector = `#${id}`;

export default function MyAccountModal(props)
{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    function handleSubmit(e)
    {
        e.preventDefault();
        const username = e.target.username.value;
    }

    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form className={'modal-body'} onSubmit={handleSubmit}>
                        <h5 className="modal-title mb-0">Welcome {state.app.username} !</h5>
                    </form>
                </div>
            </div>
        </div>
    );
}