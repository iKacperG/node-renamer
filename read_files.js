
const fs = require('fs');


const listFiles =  (chosenFolder) => {


    fs.readdirSync(chosenFolder).forEach(file => {
        console.log(file);
    });

}

module.exports = listFiles