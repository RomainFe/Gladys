
var handler = require('./handler/index.js');

module.exports = function(topic, message) {
	try{

		console.log(`${topic}`);

		if(topic=='Home/Cuisine/CapteurGCourant'){
			var obj = JSON.parse(message);
			var float_param = parseFloat(obj);
			console.log(`try topic Cuisine`);
			console.log(obj);
			return handler.dataConsumption(topic, float_param);
		}

		if(topic=='Home/Salon/CapteurPCourant'){
			var obj = JSON.parse(message);
			var float_param = parseFloat(obj);
			console.log(`try salon`);
			return handler.dataConsumption(topic, float_param);
		}

	} catch(e) {
		sails.log.warn(`MQTT : handler : fail to handle incoming message on topic ${topic}`);
		sails.log.warn(e);
	};
};
