
var util = require('util');
var mqtt = require('mqtt');
var handler = require('./handler.js');

module.exports = function() {

	return gladys.param.getValues(['MQTT_URL'])
		.spread(function(url){

			var client = mqtt.connect(url);

			client.on('connect', function () {
				console.log(`try Cuisine`);
				// Gladys multi instances
				client.subscribe('Home/Cuisine/CapteurGCourant');

				// Capteur PC topic
				client.subscribe('Home/Cuisine/CapteurPCourant');


				console.log(`try salon`);
			});



			}
			client.on('error', function(err) {
				sails.log.warn(`Fail to connect to MQTT : ${url}`);
			});

				while (true)
				{
					client.on('message', function (topic, message) {
					sails.log.info(`MQTT : New message in topic ${topic}`);
					handler(topic, message.toString());
				});
			}
			// forward events to other Gladys machine

			return client;
	  });

};
