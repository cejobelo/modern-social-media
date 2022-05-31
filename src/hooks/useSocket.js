import {io} from 'socket.io-client';

const socket = io(process.env.REACT_APP_URL);
const controllers = require('../controllers').default;

for (const controller of controllers)
{
    socket.on(controller.name, (...args) => {
        controller.handler(...args);
    });
}

/**
 * Custom hook for socket usage.
 *
 * @return {Socket}
 */
export function useSocket() {
    return socket;
}