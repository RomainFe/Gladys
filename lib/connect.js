
var util = require('util');
var mqtt = require('mqtt');
var handler = require('./handler.js');

module.exports = function() {

	return gladys.param.getValues(['MQTT_URL'])
		.spread(function(url){

			var client = mqtt.connect(url);

			client.on('connect', function () {
				console.log(`try Cuisine`);
				// Abonnement au topic déier au boitier de mesure1
				client.subscribe('Home/Cuisine/CapteurGCourant');

				// Abonnement au topic déier au boitier de mesure1
				client.subscribe('Home/Cuisine/CapteurPCourant');
			});


			client.on('error', function(err) {
				sails.log.warn(`Fail to connect to MQTT : ${url}`);
			});


					client.on('message', function (topic, message) {
					sails.log.info(`MQTT : New message in topic ${topic}`);
					handler(topic, message.toString()); // appel méthode handler des qu'un message apparait sur un topic
				});
			// forward events to other Gladys machine

			return client;
	  });

};
