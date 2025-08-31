

const f = () => {
    try {
        let a = 0
        // console.log(program)
        console.log("Program ran successfully!")
        return a // finally will run even when you use return inside the try or catch
    } catch (err) {
        console.log("This is an error");
        console.log(p)
    } finally {
        console.log("finally clause ran")
    }
}

f()
console.log("End")

