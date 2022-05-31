import {disconnect} from '../redux/App';
import store from '../store';

export default {
    name: 'Logout',
    handler: () => {
        store.dispatch(disconnect());
    },
};