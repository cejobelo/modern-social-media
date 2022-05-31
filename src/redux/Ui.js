import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        posts: [],
        AddPostModal: false,
        LoginModal: false,
        PostOffcanvas: false,
    },
    reducers: {
        show: (state, action) => {
            let obj = {};

            if (typeof action.payload === 'string')
            {
                obj[action.payload] = true;
            }

            else if (typeof action.payload === 'object')
            {
                obj[action.payload.id] = action.payload.data;
            }

            else
            {
                throw `Error modal target`;
            }

            return Object.assign(state, obj);
        },

        close: (state, action) => {
            let obj = {};
            obj[action.payload] = false;
            return Object.assign(state, obj);
        },

        showPost: (state, action) => {
            let obj = {};
            obj[action.payload] = true;
            return Object.assign(state, obj);
        },

        setPosts: (state, action) => {
            console.log('setPosts', {
                ...state,
                posts: action.payload,
            });
            return {
                ...state,
                posts: action.payload,
            };
        },

        addPost: (state, action) => {
            let posts = state.posts;
            posts.push(action.payload);
        },
    },
});

export const { show, close, setPosts, addPost } = uiSlice.actions;

export default uiSlice.reducer;