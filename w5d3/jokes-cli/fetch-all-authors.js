const pg = require("pg")
const { Client } = pg

const client = new Client({
  host:"localhost",
  user:"labber",
  password:"labber",
  port:5432,
  database:"oct14_jokes"
})

const parseAuthors = authorList => authorList.forEach(outputAuthorToConsole)

const outputAuthorToConsole = author => {
  console.log("🥔🥔🦜🦜✨✨")
  console.log(`Author #${author.id} ${author.name}, ${author.funny ? "They're" : "They're not"} funny.`)
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

// connectAndQueryDB("SELECT * FROM authors", null, true)
//   .then(parseAuthors)
//   .catch(logError)
//   .finally(closeConnection)

connectAndQueryDB("SELECT * FROM authors LIMIT 1", null, false)
  .then(outputAuthorToConsole)
  .catch(logError)
  .finally(closeConnection)

connectAndQueryDB("SELECT * FROM authors WHERE funny = false", null, true)
  .then(outputAuthorToConsole)
  .catch(logError)
  .finally(closeConnection)


// const sampleUser = {
//     id: 1,
//     name: 'Francis',
//     funny: true,
//     description: 'Oh boy, he is a teacher'
//   }


// Y, formely known as tweeter
// AJAX call to fetch tweets (fetchTweets (AJAX))

// createTweetElement
// parseTweets