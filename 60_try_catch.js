
setTimeout(() => {
    console.log("Hacking wifi...please wait...")
}, 1000)

// This will still throw an error even though we're using a try-catch block.
// That's because try-catch only works for synchronous code.
// In this example, the try block schedules the async operation and moves on.
// If the async code later throws/rejects, the error won't be caught here.
// To handle it correctly, put the try-catch inside an async function
try{
    setTimeout(()=>{
        console.log(omkar)
    }, 100)
}
catch(err){
    console.log(err)
}

// this will not give an error because we are using the try-catch block inside the asynchronous block
setTimeout(()=>{
    try{
        console.log(omkar)
    }
    catch(err){
        console.log(err)
    }
}, 100)




setTimeout(() => {
    console.log("Fetching username and password...please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking Omkar's facebook id...please wait...")
}, 3000)

setTimeout(() => {
    console.log("username and password fetched...please wait...")
}, 4000)