import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        connected: false,
        username: '',
    },
    reducers: {
        connect: (state, action) => {
            return {
                ...state,
                connected: true,
                username: action.payload,
            };
        },

        disconnect: (state, action) => {
            return {
                ...state,
                connected: false,
                username: '',
            };
        },
    },
});

export const { connect, disconnect } = appSlice.actions;

export default appSlice.reducer;