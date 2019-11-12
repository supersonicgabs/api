const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        user: process.env.USERAPI,
        host: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        ssl: true
    }
});

module.exports = knex;