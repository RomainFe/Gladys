
module.exports = function(topic, param){
																																												// Creation du nouvel etat du Capteur
																																												// Passage de param du type object à float pour acceder à la méthode "createByDeviceTypeIdentifier"
		var state = {
		 value: param
		};
		return gladys.deviceState.createByDeviceTypeIdentifier(topic, 'mqtt_hook', state)		// Récupération de la valeur de consommation sur gladys
		.then(function(state){
			 console.log('sucess');
		})
		.catch(function(err){																																// Gestion des erreurs
				console.log(err);
		});

};
