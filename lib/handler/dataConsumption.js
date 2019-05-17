
module.exports = function(topic, param){
		//Creation du nouvel etat du Capteur

		//passage de param du type object à float pour acceder à la méthode
		var state = {
		 value: param
		};
		return gladys.deviceState.createByDeviceTypeIdentifier(topic, 'mqtt_hook', state)	//recupération de la valeur de consommation sur gladys
		.then(function(state){
			 console.log('sucess');
		})
		.catch(function(err){
				console.log(err);
		});

};
