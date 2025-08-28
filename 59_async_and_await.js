



async function harry() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('27 deg')
        }, 2000)
    })

    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('21 deg')
        }, 5000)
    })
    // delhiweather.then(alert)
    // bangloreweather.then(alert)

    console.log("Fetching delhi weather...Please wait!")
    let delhiW = await delhiweather
    console.log("Fetching banglore weather...Please wait!")
    let bangaloreW = await bangloreweather
    console.log("Fetched delhi and bangalore weather...Please wait!")
    return [delhiW, bangaloreW]
 }

const cherry = async () => {
    console.log("Hey I am cherry and I am not waiting")
}

const main1 = async () => {
    console.log("welcome to weather control room")
    let a = await harry()
    let b = await cherry()
}

main1()