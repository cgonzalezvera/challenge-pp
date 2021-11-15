# Challenge PersonalPay

## Autor: Ing. Claudio Gonzalez Vera

## Objetivos:
- Mantenibilidad:por eso elegi typescript como tool para ayudar a la legibilidad del codigo.
- Alta cohesion y simple responsabilidad:las funciones y modulos en gran parte hacen unas cuantas cosas. 
- Modularidad:siguiendo el principo anterior, se hizo una division entre controladores, rutas y servicios.
- Testeable:se hicieron test de ciertos casos de uso de los endpoints.

## Aspectos por mejorar
- cubrir con más unit-tests diferentes casos de uso.
- usando alguna liberia mockear los request http.

## Cómo ejecutar app
- npm run dev

## Cómo ejecutar tests
- npm run test

## Endpoints
- Si ejecutamos la app. en local esta escucha en http://localhost:9000/v1
- ubicacion actual: http://localhost:9000/v1/location
- clima ubicacion parametrizada como path (city). Si no se indica se toma la ubicacion actual: http://localhost:9000/v1/current/{city}
- pronostico a cinco dias en la ubicacion parametrizada como path (city). Si no se indica se toma la ubicacion actual: http://localhost:9000/v1/forecast/{city}
