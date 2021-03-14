//console.log(__filename);
//console.log(__dirname);
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //raise an event
    this.emit("messageLogged", { id: 1, url: "http://" }); //making a noice
  }
}

module.exports = Logger; //logger is exported as a class
//use module.export.log = log to export as obj while using function or obj instead of class
