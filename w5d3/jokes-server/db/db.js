const pg = require("pg")
const { Client } = pg

const client = new Client({
  host:"localhost",
  user:"labber",
  password:"labber",
  port:5432,
  database:"oct14_jokes"
})

client.connect()

module.exports = client