import { configureStore } from '@reduxjs/toolkit';
import appReducer from './redux/App';
import uiReducer from './redux/Ui';

export default configureStore({
    reducer: {
        app: appReducer,
        ui: uiReducer,
    },
});