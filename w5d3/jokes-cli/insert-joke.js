const pg = require("pg");
const { Client } = pg;

const client = new Client({
  host: "localhost",
  user: "labber",
  password: "labber",
  port: 5432,
  database: "oct14_jokes",
});


const outputJokeToConsole = (joke) => {
  console.log("🥔🥔🦜🦜✨✨");
  console.log(`Joke #${joke.id}`);
  console.log(`Question: ${joke.question}`);
  console.log(`Answer: ${joke.answer}`);
  console.log(`By: ${joke.author_id}`);
  console.log("🥔🥔🦜🦜✨✨\n\n");
};

const connectAndQueryDB = (query, args, hasMany) => {
  return client
    .connect()
    .then(() => client.query(query, args))
    .then((res) => (hasMany ? res.rows : res.rows[0]));
};

const logError = (err) => {
  // Save err to file

  console.log("\n😡😡😡😡😡😡😡😡😡");
  console.log(err);
  console.log("😡😡😡😡😡😡😡😡😡\n");
};

const closeConnection = () => {
  client.end();
  console.log("Connection closed.");
};

const queryString = `
  INSERT INTO jokes
    (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
`;

const queryArgs = process.argv.slice(2);

connectAndQueryDB(queryString, queryArgs, false)
  .then(outputJokeToConsole)
  .catch(logError)
  .finally(closeConnection);


// é => &eacute;
// ; => &...;