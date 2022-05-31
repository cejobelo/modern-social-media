import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {show} from '../redux/Ui';

export default function Post({code, username, text})
{
    const dispatch = useDispatch();

    return (
        <div className={'Post col-12 col-lg-6'} data-bs-target="#offcanvasPost" onClick={() => {
            dispatch (
                show ({
                    id: require('./Post.offcanvas').id,
                    data: {Code: code, Username: username, Text: text},
                })
            );
        }}>
            <Link to="/okokok" className={'golink d-none'} />
            <div className={'p-5'}>
                <div className={'Post__text'}>{text}</div>
                <h1 className={'Post__username'}><small>{username}</small></h1>
            </div>
        </div>
    );
}