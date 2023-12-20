import inquirer from 'inquirer'
import { url } from 'inspector';
import qr from 'qr-image'
import fs, { writeFile } from 'fs'
import { Console } from 'console';


inquirer
    .prompt([{ message: "Type in your url: ", name: "URL" }])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if(err) throw err;
            console.log("The file has been saved")
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            throw error
        } else {
            console.log("Something else went wrong")
        }
    });

