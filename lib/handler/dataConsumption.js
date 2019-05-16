
module.exports = function(topic, param){
		//Creation du nouvel etat du Capteur
		var state = {
		 value: 1
		};
		return gladys.deviceState.createByDeviceTypeIdentifier(topic, 'mqtt_hook', param)
		.then(function(param){
			 console.log('sucess');
		})
		.catch(function(err){
				console.log(err);
		});

};
