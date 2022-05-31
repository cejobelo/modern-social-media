/**
 * user table model.
 *
 * @author Phil'dy Jocelyn Belcou <pj.belcou@gmail.com>
 */
class User extends require('./AbstractModel')
{
    /**
     * @inheritDoc
     * @see AbstractRoute.getTablename
     */
    getTablename()
    {
        return 'user';
    }

    /**
     * @inheritDoc
     * @see AbstractRoute.getFields
     */
    getFields()
    {
        return ['Code', 'Username'];
    }

    /**
     * Return a user.
     *
     * @param {string} username
     * @return {Promise}
     */
    getOne(username)
    {
        return this.select(`
            select
                ${this.getFieldsSQLQueryFormat()}
            from
                ${this.getTablename()}
            where
                Username = ?
        `, [username]);
    }
}

module.exports = new User;