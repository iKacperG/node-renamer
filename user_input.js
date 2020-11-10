const listFiles = require('./read_files')
const openCreator = require("./name_creator");
const readline = require('readline');
let chosenFolder;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('specify path to folder ', (answer) => {
    chosenFolder = answer
    askWhatToDo()
})

const askWhatToDo = () => {
    rl.question('What would you like to do? (ls = list onc = open name creator) ', (answer) => {

        if (answer === 'ls') {
            listFiles(chosenFolder);
            return askWhatToDo()
        }
        if (answer === 'onc') {
            openCreator(rl, chosenFolder);
        } else {
            console.log('type valid request');
            return askWhatToDo()
        }

    });

}

