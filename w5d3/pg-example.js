// What is import

// import pg from "pg" // ES MODULE SYNTAX
const pg = require("pg") // COMMONJS SYNTAX

// What is await SYNTAX SUGAR FOR PROMISES

// const someResult = await someLongTask()


const { Client } = pg
 
const client = new Client()
 
// you can also use async/await
const res = await client.query('SELECT NOW()')
await pool.end()


const someObj = {}
const someOtherObj = new Object()


// Async content: Callbacks, Promises