//Write Files
const fs = require('fs');


const writeFile = (fileContent) => {
    fs.writeFile('./createPage/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('./createPage/index.html LINK TO TEAM PROFILE. ');

        }
    });

};

module.exports = writeFile;