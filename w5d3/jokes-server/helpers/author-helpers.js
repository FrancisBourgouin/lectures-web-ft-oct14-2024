const client = require("../db/db.js")

const fetchAllAuthors = () => {
  const queryString = `
  SELECT 
    *
  FROM
    authors
`

  return client.query(queryString).then(res => res.rows)
}

module.exports = {fetchAllAuthors}