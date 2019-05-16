
module.exports = function(topic, param){
		//Creation du nouvel etat du Capteur
		console.log(param.values());
		console.log(param.keys());
		return gladys.deviceState.createByDeviceTypeIdentifier(topic, 'mqtt_hook', param.toString().parseFloat());

};
