
var util = require('util');																											// Pré requis
var mqtt = require('mqtt');
var handler = require('./handler.js');

module.exports = function() {

	return gladys.param.getValues(['MQTT_URL'])																		// Récupération de l'ip et du port du serveur mqtt, configurer sur Gladys dans paramètres/parametres/clé;valeur
		.spread(function(url){

			var client = mqtt.connect(url);																						// Connection au serveur mqtt

			client.on('connect', function () {
				console.log(`try Cuisine`);
				client.subscribe('Home/Cuisine/CapteurGCourant');												// Abonnement au topic dédier au boitier de mesure1

				client.subscribe('Home/Salon/CapteurPCourant');													// Abonnement au topic déier au boitier de mesure1
			});


			client.on('error', function(err) {																				// Gestion des erreurs
				sails.log.warn(`Fail to connect to MQTT : ${url}`);
			});


					client.on('message', function (topic, message) {
					sails.log.info(`MQTT : New message in topic ${topic}`);
					handler(topic, message.toString()); 																	// Appel méthode handler des qu'un message apparait sur un topic
				});

			return client;
	  });

};
