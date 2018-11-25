# ServidorPooNodeJs

Servidor en Node Js que responde a varios tipos de peticiones
##Tipos de entidades
Hay dos tipos de entidades:
- LocalBusiness
- FoodEstablishment

## Estructura de LocalBusiness

| Atributos | Descripción | Tipo |
| ---- | ---- | ---- |
| name | Nombre del local  | Texto |
| address | Dirección del local | Texto |
| description | Descripción del local | Texto |
| telephone | Telefono del local | Texto |
| url | Url de la web del local | Texto |
| openingHours | Horas a las que esta abierto el local | Array de Textos |

## Estructura de FoodEstablishment

| Atributos | Descripción | Tipo |
| ---- | ---- | ---- |
| name | Nombre del local  | Texto |
| address | Dirección del local | Texto |
| description | Descripción del local | Texto |
| telephone | Telefono del local | Texto |
| url | Url de la web del local | Texto |
| openingHours | Horas a las que esta abierto el local | Array de Textos |
| acceptsReservations | Si acepta reservas | Booleano |
| servesCuisine | Tipos de cocina que sirve | Array de Textos |

## Estructura de las peticiones al servidor

| Estructura petición | Descripción |
| ---- | ---- |
| GET <url> | Devolverá información sobre los tipos de entidad disponibles |
| GET <url>/{entidad} | Mostrará la lista de todas las entidades de ese tipo. |
| POST <url>/{entidad} | Añadir una entidad pasándole los campos en el cuerpo codificados en JSON |
| PUT <url>/{entidad}/{id} | Actualizar la entidad con identificador {id}.En el cuerpo se incluirán los nuevos datos actualizados de esa entidad |
| GET <url>/{entidad}/{id} | Devuelve información de una entidad concreta |
| DELETE <url>/{entidad}/{id} | Borrar datos de una entidad concreta |

