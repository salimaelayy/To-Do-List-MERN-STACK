const { sign } = require('jsonwebtoken')
require('dotenv').config();



const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user.id },
    process.env.SECRET_TOKEN, 
    { expiresIn: '1h' },
  )

  return accessToken
}

module.exports = { createToken }
