require('dotenv').config()

module.exports = {
    client: 'mysql',
    connection: {
        port: process.env.DBCONNECTION_PORT,
        host: process.env.DBCONNECTION_HOST,
        user: process.env.DBCONNECTION_USER,
        password: process.env.DBCONNECTION_PASSWORD,
        database: process.env.DBCONNECTION_DB,
        connectTimeout: 3600
    },
    debug: false,
    pool: {
        min: 1,
        max: 10,
        afterCreate: function (conn, cb) {
            conn.query('SET sql_mode="NO_ENGINE_SUBSTITUTION";', function (err) {
                cb(err, conn);
            });
        }
    }
}