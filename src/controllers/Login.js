import {connect} from '../redux/App';
import {setPosts} from '../redux/Ui';
import store from '../store';

export default {
    name: 'Login',
    handler: (username, posts) => {
        store.dispatch(connect(username));
        store.dispatch(setPosts(posts));
    },
};