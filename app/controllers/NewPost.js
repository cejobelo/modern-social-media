/**
 * New post.
 *
 * @author Phil'dy Jocelyn Belcou <pj.belcou@gmail.com>
 */
module.exports = class NewPost extends require('./AbstractController')
{
    /**
     * @inheritDoc
     * @see AbstractSocketController.getName
     */
    getName()
    {
        return 'NewPost';
    }

    /**
     * @inheritDoc
     * @see AbstractSocketController.handler
     */
    handler(post)
    {
        const username = post.username.replace( /(<([^>]+)>)/ig, '');
        const text = post.text.replace( /(<([^>]+)>)/ig, '');
        this.socket.emit('NewPost', {
            Code: 42,
            Username: username,
            Text: text,
        });
    }
}