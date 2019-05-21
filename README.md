# Gladys-mqtt_hook

Gladys Get consumption of device by sensor over mqtt.

Need Gladys version >= 3.0.0.

## Prerequisites

"dependencies": {
  "mqtt": "^2.14.0"
}

package.json

## Documentation

On Gladys :
  Create new devices in périphériques/mes périphériques(exemple "Capteur Gcourant")
    **Name:** As you Like
    **Identifier** This is your topic !
    **Protocol** mqtt
    **Service** mqtt_hook
    **Piece** Where is the device ?

    click on "see more" and configure :
      **Name:** As you Like
      **Identifier** This is your topic !
      **Type** type of result(exemple : "float")
      **Unité** unity of your value
      **min** 0
      **max** As you want
      **Capteur** activated
      **Afficher** activated
    In paramètres/paramètres :
      **Clé** MQTT_URL
      **Valeur** http://"ipRaspberry":1883

  To install this module:

    On the Module / Advanced Gladys screen, manually install the module with the following information:  
      **Name:** mqtt_hook
      **Version:** 2.0
      **URL:** https://github.com/RomainFe/Gladys.git  
      **Slug:** mqtt_hook

Restart Gladys

Enjoy !
