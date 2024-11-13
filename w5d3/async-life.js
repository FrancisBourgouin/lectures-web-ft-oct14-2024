// Async JS

// Callbacks

// The original way to handle asynchronous operations

// Promises

// Newer version of how to interact with asynchronous operations

// Async/Await (Syntax Sugar for Promises)


const someAsyncFunction = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(Math.random() > 0.5){
        return res("YAY")
      } else {
        return rej("NAY")
      }
    }, 1000)
  })
}


someAsyncFunction()
  .then(message => console.log("Success, message is: ", message))
  .catch(message => console.log("Error message is: ", message))

const doAsyncWork = async () => {
  // await Promise.all([prom, prom, prom])
  try{
    const result = await someAsyncFunction()
    console.log(result)
  } catch(err){
    console.log(err)
  }
}

doAsyncWork()