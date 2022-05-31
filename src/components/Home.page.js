import React from 'react';
import Post from './Post';
import Header from './Header';
import LoginModal from './Login.modal';
import MyAccountModal from './MyAccount.modal';
import PostDetailOffcanvas from './Post.offcanvas';
import AddPostModal from './AddPost.modal';
import {useDispatch, useSelector} from 'react-redux';
import {show} from '../redux/Ui';

export default function Welcome()
{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return <div className='Home'>
        <Header/>

        {
            state.app.connected ? '' : <div className={'text-white mt-5 text-center'}>
                <div>Welcome!</div>
                <small className={'d-block'}>Login to view and add posts.</small>
                <button className="Header__loginBtn btn btn-danger btn-circle" onClick={() => {
                    dispatch(show(require('./Login.modal').id));
                }}>Log in</button>
            </div>
        }

        <div className='Home__content'>
            <div className={'Home__row row'}>
                {state.ui.posts.map(function(post) {
                    return <Post code={post['Code']} username={post['Username']} text={post['Text']} key={post['Code']}/>;
                })}
            </div>
        </div>

        <PostDetailOffcanvas/>
        <AddPostModal/>
        <LoginModal/>
        <MyAccountModal/>
    </div>;
}