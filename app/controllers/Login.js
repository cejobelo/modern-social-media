/**
 * Login.
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
        return 'Login';
    }

    /**
     * @inheritDoc
     * @see AbstractSocketController.handler
     */
    handler(username)
    {
        this.socket.emit('Login', username, require('../posts'));
    }
}