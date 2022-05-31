module.exports = class AbstractController
{
    /**
     * The constructor.
     *
     * @param socket
     */
    constructor(socket) {
        this.socket = socket;
        socket.on(this.getName(), (...args) => {
            console.log(`Handler ${this.getName()}`, ...args);
            this.handler(...args);
        });
    }

    /**
     * Return the event name.
     *
     * @return {string}
     */
    getName()
    {
        throw `AbstractSocketController::getName must be implemented`;
    }

    /**
     * Handler.
     *
     * @return {void}
     */
    handler()
    {
        throw `AbstractSocketController::getFields must be implemented`;
    }
}