## Description

Url base: /api/v1 <br>
El api consta de los siguientes endpoints: <br>
1). /travels: <br>
   method: POST, Crea un recurso de tipo travel en el store. <br>
   body(example): <br>
   {
	"start": {
		"date": "2019-01-25T19:06:27.936+0000",
		"pickup_address": "Cl. 90 #19-41, Bogotá, Colombia",
		"pickup_location": {
			"type": "Point",
			"coordinates": [
				-74.0565192,
				4.6761959
			]
		}
	},
	"end": {
		"date": null,
		"pickup_address": "Ac. 100 #13-21, Bogotá, Colombia",
		"pickup_location": {
			"type": "Point",
			"coordinates": [
				-74.0465655,
				4.6830892
			]
		}
	},
	"country": {
		"name": "Colombia"
	},
	"city": {
		"name": "Bogotá"
	},
	"passenger": {
		"first_name": "Ricardo",
		"last_name": "Sarmiento"
	},
	"driver": {
		"first_name": "Julio Alberto",
		"last_name": "Mesa Rodriguez"
	},
	"car": {
		"plate": "ESM308"
	},
	"status": "started",
	"check_code": "66",
	"createdAt": "2019-01-25T19:03:53.251+0000",
	"updatedAt": "2019-01-25T19:47:04.397+0000",
	"price": 13800.0,
	"driver_location": {
		"type": "Point",
		"coordinates": [
			-74.06017631292343,
			4.669553302335373
		]
	}
}
<br>
<br>
method: GET, retorna el número total de viajes en el store.<br>
<br>
2). /travels/:city <br>
  Method: GET, retorna el número de viajes filtrado por el parámetro city. <br>
  parameter(example): [Bogotá, Medellin]
<br>
<br>
Nota: modifique la URI de la base de datos mongo en el archivo properties.ts<br><br>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```