let fs = require('fs');


const openCreator = (rl, chosenFolder) => {
    rl.question('type name of file to rename (* for all, *.format for all of given format in directory) ', (oldname) => {
        rl.question('type new name ', (newname) => {
            fs.rename(`${chosenFolder}/${oldname}`, `${chosenFolder}/${newname}`, (err) => {
                if (err) console.log(err);
            })
            rl.close()
        })
    })
}

module.exports = openCreator