import React from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {close} from '../redux/Ui';

export const id = 'PostOffcanvas';
export const selector = `#${id}`;

export default function PostOffcanvas(props)
{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return (
        <Offcanvas id={id} show={state.ui[id]} onHide={() => dispatch(close(id))} placement={'end'}>
            <div className="offcanvas-header">
                <div className="offcanvas-title">
                    <div>By <span className={'text-danger'}>{state.ui[id]['Username']}</span></div>
                </div>
                <Button variant={'link'} onClick={() => dispatch(close(id))} className={'btn-close'} />
            </div>

            <div className="offcanvas-body">

                <div>{state.ui[id]['Text']}</div>
            </div>
        </Offcanvas>
    );
}