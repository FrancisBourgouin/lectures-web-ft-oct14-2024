const pg = require("pg")
const { Client } = pg

const client = new Client({
  host:"localhost",
  user:"labber",
  password:"labber",
  port:5432,
  database:"oct14_jokes"
})

const parseJokes = jokeList => jokeList.forEach(outputJokeToConsole)

const outputJokeToConsole = joke => {
  console.log("🥔🥔🦜🦜✨✨")
  console.log(`Joke #${joke.id}`)
  console.log(`Question: ${joke.question}`)
  console.log(`Answer: ${joke.answer}`)
  console.log(`By: ${joke.author_name}`)
  console.log("🥔🥔🦜🦜✨✨\n\n")
}

const connectAndQueryDB = (query, args, hasMany) => {
  return client
  .connect()
  .then(() => client.query(query))
  .then(res => hasMany ? res.rows : res.rows[0])
}

const logError = (err) => {
  // Save err to file

  console.log("\n😡😡😡😡😡😡😡😡😡")
  console.log(err)
  console.log("😡😡😡😡😡😡😡😡😡\n")
}

const closeConnection = () => {
  client.end()
  console.log("Connection closed.")
}

const queryString = `
  SELECT 
    jokes.*,
    authors.name AS author_name
  FROM jokes
  JOIN authors
  ON jokes.author_id = authors.id
`

connectAndQueryDB(queryString, null, true)
  // .then(parseJokes)
  .then(console.log)
  .catch(logError)
  .finally(closeConnection)