# Challenge PersonalPay

## Autor: Ing. Claudio Gonzalez Vera
## email: cgonzalezvera@gmail.com

## Objetivos:
- Mantenibilidad: por eso elegi typescript como tool para ayudar a la legibilidad del codigo. Un codigo legibles suaviza el trabajo en equipo ya que los demas podran comprender un poco mejor el codigo.
- Alta cohesion y simple responsabilidad:las funciones y modulos creados tienen pocas responsabilidades en general. 
- Modularidad: siguiendo el principo anterior, se hizo una division entre controladores, rutas y servicios. 
- Testeable: se hicieron test de ciertos casos de uso de los endpoints.

## Aspectos por mejorar
- cubrir con más unit-tests diferentes casos de uso.
- crear mocks http request empleando alguna libreria. Por ejemplo nock.js

## Cómo ejecutar app
- npm run dev

## Cómo ejecutar tests
- npm run test

## Endpoints

- Si ejecutamos la app. localmente, esta escucha en: http://localhost:9000/v1
- Obtener ubicación actual: http://localhost:9000/v1/location
- (*) Obtener clima ubicación parametrizada como path (city): http://localhost:9000/v1/current/{city}
- (*) Obtener pronóstico a cinco dias en la ubicación parametrizada como path (city): http://localhost:9000/v1/forecast/{city}

(*) Si no se indica como parámetro el nombre de una ciudad, se tomara como valor la ubicacion actual a partir de la IP.
