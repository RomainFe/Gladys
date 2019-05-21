// Main

module.exports = function (sails) {

    var exec = require('./lib/exec.js');                                        // Fichier requis
    var connect = require('./lib/connect.js');                                  // Fichier requis

    gladys.on('ready', function(){                                              // lorsque gladys est allumé et en fonction :
      connect();                                                                // déclancher connect()
    });


    return {
        exec: exec                                                              //Retourné le exec.js
    };
};
