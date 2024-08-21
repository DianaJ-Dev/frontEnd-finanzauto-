# Finanzauto

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Instrucciones para ejecutar el proyecto ](#2-Instrucciones-para-ejecutar-el-proyecto)
* [3. Desarrollo del proyecto ](#3-Desarrollo-del-proyecto )
* [4. Futuras mejoras ](#3-Futuras-mejoras )

***

## 1. Resumen del proyecto

Este proyecto proporciona una interfaz interactiva donde los usuarios pueden seleccionar
el modelo de automóvil. Al hacer clic en ver detalle de cada modelo,
el sistema consulta una API para obtener un resumen detallado de las valoraciones del 
vehículo. El resumen incluye tanto los comentarios positivos como los negativos, así
como la calificación final general del modelo. Esto permite a los usuarios obtener una
visión clara y concisa de la opinión pública sobre el automóvil, facilitando la toma 
de decisiones informadas.

## 2. Instrucciones para ejecutar el proyecto

1. Es muy fácil de usar:

Simplemente accede a la página

```text
https://front-end-finanzauto.vercel.app/
```

Luego, vamos a dar clic en ver detalle del modelo que queramos conocer.

<img width="600" alt="Respuesta" src="https://github.com/DianaJ-Dev/frontEnd-finanzauto-/blob/main/src/photo/ImgVerDetalle.png">


## 3. Desarrollo del proyecto 

El desarrollo del proyecto se realizó utilizando los siguientes paquetes:

### `bootstrap`
facilita la creación de interfaces web responsivas

```text
$ npm install bootstrap
```

### `react`
Construir interfaces de usuario interactivas

```text
$ npm install react
```

### `swiper`
Crear carruseles de contenido

```text
npm install swiper
```

### `Api`
Esta API contiene el resumen de todas las opiniones por cada marca. 

```text
$ https://backend-finanzauto.onrender.com/summary/nombreMarca
```

```text
$ https://github.com/DianaJ-Dev/backend-finanzauto/edit/main/README.md
```

## 3. Futuras mejoras

* [ ] Mostrar más marcas de autos: Expandir la API para incluir más modelos y marcas.
* [ ] Optimización del rendimiento: Mejorar la velocidad y eficiencia del scraping.

