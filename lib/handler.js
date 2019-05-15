
var handler = require('./handler/index.js');

module.exports = function(topic, message) {
	try{

		console.log(`${topic}`);

		if(topic=='Home/Cuisine/CapteurGCourant'){
			var obj = JSON.parse(message);
			return handler.dataConsumption(topic, obj);
			console.log(`try topic Cuisine`);
		}

		// Owntracks topic
		if(topic=='Home/Cuisine/CapteurPCourant'){
			var obj = JSON.parse(message);
			return handler.dataConsumption(topic, obj);
			console.log(`try salon`);
		}

	} catch(e) {
		sails.log.warn(`MQTT : handler : fail to handle incoming message on topic ${topic}`);
		sails.log.warn(e);
	};
};
