let Fileout = []
let madeChange = false
for (const line of rawDataArra) {
    let foundLine = false
    let counter = 0
    const numberLinesToReplace = 5
    if (foundLine && counter < numberLinesToReplace) {
        counter++
    } else if (foundLine && counter == numberLinesToReplace)  {
        foundline = false
        counter = 0
        Fileout.push("first line of code")
        Fileout.push("second line of code")
        Fileout.push("third line of code")
        Fileout.push("fourth line of code")
        Fileout.push("fifth line of code")
    } else {
        if (line.includes("String to find for first line of code")) {
            foundLine = true
            madeChange = true
        } else {
            Fileout.push(line)
        }
    }

    
    
}

if (madeChange) {

}

    