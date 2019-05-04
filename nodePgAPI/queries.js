const Pool = require('pg').Pool
const pool = new Pool({
    user: 'odoo',
    host: 'localhost',
    database: 'odoo12_dev',
    password: 'odoo@123',
    port: 5432,
})

const tblName = 'res_partner'

const getUsers = (request, response) => {
    pool.query('SELECT * FROM '+ tblName + ' ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM ' + tblName + ' WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO  ' + tblName + ' (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        // response.status(200).send(`User added with ID: ${results.rows}`)
        response.status(200).json(results.rows)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE ' + tblName + ' SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM ' + tblName + ' WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}