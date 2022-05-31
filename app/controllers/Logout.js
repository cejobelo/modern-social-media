/**
 * Logout.
 *
 * @author Phil'dy Jocelyn Belcou <pj.belcou@gmail.com>
 */
module.exports = class Login extends require('./AbstractController')
{
    /**
     * @inheritDoc
     * @see AbstractSocketController.getName
     */
    getName()
    {
        return 'Logout';
    }

    /**
     * @inheritDoc
     * @see AbstractSocketController.handler
     */
    handler()
    {
        this.socket.emit('Logout');
    }
}