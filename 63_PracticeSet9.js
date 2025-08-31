
// question 1
// let promise = new Promise((resolve, reject) => {
//     let bootstrap_script = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
//
//     let script_tag = document.createElement("script");
//     script_tag.src = bootstrap_script;
//     document.body.appendChild(script_tag);
//
//     script_tag.onload = () => {
//         resolve("Loaded")
//     }
//
//     script_tag.onerror = () => {
//         reject("Loading error");
//     }
// })
//
// promise.then((result) => {
//     alert("Bootstrap JS Successfully loaded")
// }).catch((error) => {
//     alert(error)
// })

// question 2
// const load_js = async (src) => {
//
//     let promise = new Promise((resolve, reject) => {
//         let bootstrap_script = src
//
//         let script_tag = document.createElement("script");
//         script_tag.src = bootstrap_script;
//         document.body.appendChild(script_tag);
//
//         script_tag.onload = () => {
//             resolve("Loaded")
//         }
//
//         script_tag.onerror = () => {
//             reject("Loading error");
//         }
//     })
//
//     promise.then((result) => {
//         alert("Bootstrap JS Successfully loaded")
//     }).catch((error) => {
//         alert(error)
//     })
//
// }
//
// const main2 = async () => {
//     let src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
//     let a = await load_js(src)
//     console.log(a)
// }
//
// main2()

// question 3
// const f =  () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error");
//         }, 3000)
//     });
// }
//
// const main_func = async () => {
//     try {
//         let a = await f();
//         console.log(a);
//     }
//     catch (e) {
//         console.error(e);
//     }
// }
//
// main_func();

// question 4

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello1");
//     }, 1000)
// })
//
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello2");
//     }, 2000)
// })
//
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello3");
//     }, 3000)
// })

//case 1 - use promise.all
// let result_case1 = Promise.all([p1, p2, p3])
// result_case1.then((result) => {
//     console.log(result)
// })

//case 2 -- use async/await

const func = async () => {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello1");
        }, 1000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello2");
        }, 2000)
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello3");
        }, 3000)
    })

    return await Promise.all([p1, p2, p3])
}

const main_func = async () => {
    let result = await func();
    console.log(result)
}

main_func()

