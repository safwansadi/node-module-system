//const log = require("./logger");
/*const path = require("path");
const os = require("os");
const fs = require("fs");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

var pathObj = path.parse(__filename);

console.log(log);
console.log(pathObj);


console.log(`Total memory is ${totalMemory}`);
console.log(`Free Memory is ${freeMemory}`);

fs.readdir("./", function (err, files) {
  if (err) console.log("errror", err);
  else console.log("result", files);
}));*/

//log("safwan");

const Logger = require("./logger");
//const EventEmitter = require("events");


const logger = new Logger();
//register a listener
logger.on("messageLogged", (arg) => {
  //messageLogged is the name of the event
  console.log("listener called", arg); //function() is the call back function or the actual listener
});
//logger.emit("messageLogged", { id: 1, url: "http://" });
logger.log("safwan");
