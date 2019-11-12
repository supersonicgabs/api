const getUsers = async (req, res) => {
    const knex = require('../config/db');
    try {        
        const result =  await knex('users').select('*')
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    const knex = require('../config/db');
    try {        
        const result =  await knex('users').select('*').where('id', id)
        res.status(200).send(result);
    } catch (error) {
        console.log(error);        
    }    
}

const createUser = async (req, res) => {
    console.log('oie');
    const knex = require('../config/db')('users');
    const {body} = req;
    try {
        const result = await knex.insert(body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }

    //knex('users').insert()
}

module.exports = {
    getUsers,
    getUserById,
    createUser
}