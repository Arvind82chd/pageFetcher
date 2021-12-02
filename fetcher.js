const request = require('request');
const fs = require('fs');


const args = process.argv.slice(2);
// console.log(args);
const website = args[0];
const path = args[1]; 

const download = function(website, path) {
    request(`http://${website}`, (err, resp, body) => {
       // console.log(resp);
        if (!err && resp.statusCode === 200) {

            fs.writeFile(`${path}/test.txt`, body, 'utf-8', err => {
                if (err) throw err;
                    console.log("file written successfully");
                
            });

        }
        
    });

}

download(website, path);








