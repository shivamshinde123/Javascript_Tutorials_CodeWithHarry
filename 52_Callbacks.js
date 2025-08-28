
// synchronous programming -- used for actions that are run one by one when initiated
// let a = prompt('what is your first name')
// let b  = prompt('what is your surname')

// asynchronous programming -- used for the actions that we initiate now and finish later
// console.log("Start") // runs first
//
// // thrown in the background and once 3 sec pass, it is run
// setTimeout(function () {
//     console.log("Hey I am good")
// }, 3000)
//
// console.log("End") // runs second

// callback -- this is a function that is passed into another function and called to complete certain action inside the outer function
function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src

    // if no error
    script.onload = function () {
        console.log("Loading script: ", script)
        callback(null, src)
    }

    // error
    script.onerror = function () {
        console.log(" Error loading script: ", script)
        callback(new Error("Please recheck the src"))
    }
    document.body.appendChild(script)
}

const callback_func = (error, src) => {
    if (error) {
        console.log(error)
        return
    }
    alert("Added script: " + src)
}

loadScript("\thttps://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", callback_func)

// chronology of how the code will work async
// precise flow of the code:
//
// 1. You create the <script> element and set its src.
//
// 2. You attach two event handlers:
//
//     1. script.onload = … → runs if the browser successfully downloads and executes the script.
//
//     2. script.onerror = … → runs if the browser fails to fetch or parse the script (e.g. bad URL, network issue, invalid MIME type).
//
// 3. You append the <script> to the DOM.
//
// 4. The browser starts fetching the file in the background from src link.
//
// 5. When the fetch finishes:
//
//     ✅ If successful → fires the load event → your onload handler runs.
//
//     ❌ If failed → fires the error event → your onerror handler runs.
//
// Whichever one fires calls your callback.