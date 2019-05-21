
var handler = require('./handler/index.js');																									// Pré requis

module.exports = function(topic, message) {
	try{

		console.log(`${topic}`);

		if(topic=='Home/Cuisine/CapteurGCourant'){																								// Si le topic ayant recu un message est "Home/Cuisine/CapteurGCourant"
			var obj = JSON.parse(message);																													// Converssion des variables pour utilisé dataConsumption
			var float_param = parseFloat(obj);
			console.log(`try topic Cuisine`);
			return handler.dataConsumption(topic, float_param);																			// Utilisation de dataConsumption.js
		}

		if(topic=='Home/Salon/CapteurPCourant'){																									// Si le topic ayant recu un message est "Home/Cuisine/CapteurGCourant"
			var obj = JSON.parse(message);																													// Converssion des variables pour utilisé dataConsumption
			var float_param = parseFloat(obj);
			console.log(`try topic salon`);
			return handler.dataConsumption(topic, float_param);																			// Utilisation de dataConsumption.js
		}

	} catch(e) {																																								// Gestion des erreurs
		sails.log.warn(`MQTT : handler : fail to handle incoming message on topic ${topic}`);
		sails.log.warn(e);
	};
};
