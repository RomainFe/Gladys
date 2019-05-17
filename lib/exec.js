
var mqtt = require('mqtt');


module.exports = function exec(params) {

      if(params.deviceType.protocol==='mqtt'){
                    var topic = params.deviceType.identifier;
                    return sendMqttMsg(topic, params.state.value);

      }
      else {console.log(`MQTT Device - DeviceType protocol invalid or unknown: ${params.deviceType.protocol}`);}

    return false;
};

// Fonction : Changer l'état des actionneur "projet domotech"(Envoie sur le topic le nouvel etat du device)
function sendMqttMsg(topic, value) {
    return gladys.param.getValues(['MQTT_URL'])
        .spread(function (url) {
            var client = mqtt.connect(url);
            client.on('connect', function () {
                value = String(value);
                console.log(`Gladys hooks successful conected : ${url}`);
                console.log(`MQTT hooks - Sending ${topic} ${value}`);
                client.publish(topic, value);
            });

            client.on('error', function (error) {
                console.log(`MQTT hooks - Error: ${error}`);
                client.end();

                return false;
            });
        });
}
