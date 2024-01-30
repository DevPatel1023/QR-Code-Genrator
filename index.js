import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Remove "https://" or "http://"
    let urlString = url.replace(/^(https?:\/\/)?(www\.)?/i, '');

    // Extract the domain name
    const domainName = urlString.split('/')[0];

    // Extract the first part of the domain name 
    const name = domainName.split('.')[0];

    // Generate QR code image
    const qr_png = qr.image(url);
    
    // Save QR code as PNG file
    qr_png.pipe(fs.createWriteStream(name + ".png"));

   
    fs.appendFile("URL.txt", url+"\n", (err) => {
      if (err) {
        console.error("Error appending URL to file:", err);
      } else {
        console.log("The URL has been saved to URL.txt!");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something else went wrong:", error);
    }
  });
