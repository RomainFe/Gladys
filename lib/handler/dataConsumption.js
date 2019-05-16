
module.exports = function(topic, param){

		//Creation du nouvel etat du Capteur
if(param > 0) {
		return gladys.deviceState.createByDeviceTypeIdentifier(topic, 'mqtt_hook', param);
	}
	else {
		return Promise.resolve();
	}
};
