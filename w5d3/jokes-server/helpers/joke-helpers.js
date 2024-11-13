const client = require("../db/db.js")

const fetchAllJokes = () => {
  const queryString = `
  SELECT 
    jokes.*,
    authors.name AS author_name
  FROM jokes
  JOIN authors
  ON jokes.author_id = authors.id
`

  return client.query(queryString).then(res => res.rows)

  // const fakeResponse = [
  //   {
  //     id: 1,
  //     question: 'Knock knock, whos there, to who',
  //     answer: 'no, to whom',
  //     rating: 3,
  //     author_id: 1,
  //     author_name: 'Francis'
  //   },
  //   {
  //     id: 2,
  //     question: 'How is a bouncer at a club like a dish soap?',
  //     answer: 'They both DETER GENTS',
  //     rating: 5,
  //     author_id: 2,
  //     author_name: 'Paul'
  //   },
  //   {
  //     id: 3,
  //     question: 'What do you call a belt made out of watches?',
  //     answer: 'A waist of time.',
  //     rating: 5,
  //     author_id: 3,
  //     author_name: 'Mike'
  //   }
  // ]

  // return Promise.resolve(fakeResponse)
}

const fetchJokeById = (jokeId) => {
  const queryString = `
  SELECT 
    jokes.*,
    authors.name AS author_name
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
  WHERE jokes.id = $1
`;

const queryArgs = [jokeId];

return client.query(queryString, queryArgs).then(res => res.rows[0])

  // const fakeResponse = {
  //   id: 1,
  //   question: 'Knock knock, whos there, to who',
  //   answer: 'no, to whom',
  //   rating: 3,
  //   author_id: 1,
  //   author_name: 'Francis'
  // }

  // return Promise.resolve(fakeResponse)
}

const insertJoke = (jokeObj) => {
  const queryString = `
  INSERT INTO jokes
    (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
`;

  const queryArgs = [jokeObj.question, jokeObj.answer, jokeObj.rating, jokeObj.author_id]

  return client.query(queryString, queryArgs).then(res => res.rows[0])

  // console.log(jokeObj)

  // return Promise.resolve(
  //   {
  //     id: 1,
  //     question: 'Knock knock, whos there, to who',
  //     answer: 'no, to whom',
  //     rating: 3,
  //     author_id: 1,
  //     author_name: 'Francis'
  //   }
  // )
}

module.exports = {fetchAllJokes, fetchJokeById, insertJoke}