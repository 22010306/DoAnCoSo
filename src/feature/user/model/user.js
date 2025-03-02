const { query } = require("../../../app/database")


function getSecretValue() {
  return 'secret-value'
}

const createUserQuery = `
INSERT INTO user (name, mail, password) 
VALUES (?, ?, ?)`
async function createUser({ name, email, password }) {
  return await query(createUserQuery, [name, email, password])
}

const getUserQuery = `
SELECT * FROM user
WHERE mail = ?`
async function getUser({ email }) {
  return await query(getUserQuery, [email])
}

module.exports = {
  createUser,
  getUser,
  getSecretValue
}