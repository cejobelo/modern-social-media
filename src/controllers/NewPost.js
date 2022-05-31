import {addPost} from '../redux/Ui';
import store from '../store';

export default {
    name: 'NewPost',
    handler: (post) => {
        store.dispatch(addPost(post));
    },
};