
var mqtt = require('mqtt');


module.exports = function exec(params) {

      if(params.deviceType.protocol==='mqtt'){                                                                        // Si le protocol du device sur gladys est mqtt
                    var topic = params.deviceType.identifier;                                                         // on recupére le topic de ce meme device
                    return sendMqttMsg(topic, params.state.value);                                                    // on déclanche sendmqttmsg

      }
      else {console.log(`MQTT Device - DeviceType protocol invalid or unknown: ${params.deviceType.protocol}`);}      // gestion des erreurs

    return false;
};

function sendMqttMsg(topic, value) {                                                                                  // Fonction : Changer l'état des actionneur "projet domotech"(Envoie sur le topic le nouvel etat du device)
    return gladys.param.getValues(['MQTT_URL'])
        .spread(function (url) {
            var client = mqtt.connect(url);                                                                           // connection au serveur MQTT
            client.on('connect', function () {                                                                        //Lorsque que gladys est connecté a mqtt:
                value = String(value);
                console.log(`Gladys hooks successful conected : ${url}`);
                console.log(`MQTT hooks - Sending ${topic} ${value}`);
                client.publish(topic, value);                                                                         // On publie sur le topic la nouvelle valeur du device(equipement)
            });

            client.on('error', function (error) {                                                                     // Gestion de l'erreur
                console.log(`MQTT hooks - Error: ${error}`);
                client.end();

                return false;
            });
        });
}
