/**
 * post table model.
 *
 * @author Phil'dy Jocelyn Belcou <pj.belcou@gmail.com>
 */
class Post extends require('./AbstractModel')
{
    /**
     * @inheritDoc
     * @see AbstractRoute.getTablename
     */
    getTablename()
    {
        return 'post';
    }

    /**
     * @inheritDoc
     * @see AbstractRoute.getFields
     */
    getFields()
    {
        return ['Code', 'Username', 'Text'];
    }

    /**
     * Return a channel.
     *
     * @param {int} code
     * @return {Promise}
     */
    getOne(code)
    {
        return this.select(`
            select
                ${this.getFieldsSQLQueryFormat()}
            from
                ${this.getTablename()}
            where
                Code = ?
        `, [code]);
    }

    /**
     * Add a post.
     *
     * @param {string} username
     * @param {string} text
     * @return {Promise}
     */
    add(username, text)
    {
        return new Promise((resolve, reject) => {
            const query = `
                insert into
                    ${this.getTablename()} (Username, Text)
                values
                    (?, ?);
            `;

            this.connection.query(query, [username, text], (err, rows, fields) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    /**
     * Return trends posts.
     *
     * @return {Promise}
     */
    getTrends()
    {
        return this.select(`
            select
                ${this.getFieldsSQLQueryFormat()}
            from
                ${this.getTablename()}
        `);
    }

    /**
     * Return all channels.
     *
     * @return {Promise}
     */
    getAll()
    {
        return this.select(`
            select
                ${this.getFieldsSQLQueryFormat()}
            from
                ${this.getTablename()}
        `);
    }
}

module.exports = new Post;