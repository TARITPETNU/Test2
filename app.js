/*
var moment = require('moment');
var today = Date();

console.log("Helllo, NPM");
console.log(today); 

moment.locale('th');
console.log(moment().format("LLL"));
*/

/*
var Jimp = require('jimp');
Jimp.read('crayon.png', (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write('crayon-small-bw.jpg'); // save
  });
*/
/*
const say = require('say');
//say.speak("What's up, dog?", 'Alex', 2)
//say.speak('Yes, I am!!!');
say.speak("What's up, dog?", 'Good News', 1.0, (err) => {
    if (err) {
      return console.error(err)
    }
   
    console.log('Text has been spoken.')
  });
  */
 var QRCode = require('qrcode')
 
 QRCode.toDataURL('I am a pony!', function (err, url) {
   console.log(url)
 })