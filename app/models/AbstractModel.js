const connection = require('../database');

module.exports = class AbstractModel
{
    constructor() {
        this.connection = connection;
    }

    /**
     * Return the table name.
     *
     * @return {string}
     */
    getTablename()
    {
        throw `AbstractModel::getTablename must be implemented`;
    }

    /**
     * Return the fieldnames.
     *
     * @return {array}
     */
    getFields()
    {
        throw `AbstractModel::getFields must be implemented`;
    }

    /**
     * Return the fieldnames for SQL query.
     *
     * @return {string}
     */
    getFieldsSQLQueryFormat()
    {
        return "`" + this.getFields().join("`, `") + "`";
    }

    /**
     * Return the select query result.
     *
     * @param {string} query
     * @param {array} params
     * @return {Promise}
     */
    select(query, params = [])
    {
        return new Promise((resolve, reject) =>
        {
            this.connection.query(query, params, (err, rows, fields) =>
            {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
}