# Proyecto Mini e-commerce (E-Ric)

## ¿De que trata el proyecto?

Este proyecto fue creado durante el periodo de tiempo cursado en el bootcamp llamado [HENRY](https://soyhenry.com/), el objetivo del proyecto fue realizar un método de búsqueda utilizando una API pública de Mercado Libre.


## ¿Como correr el proyecto?

### Importante :
```
El proyecto esta realizado con redis por lo tanto es necesario tener instalado en nuestra computadora [REDIS](https://redis.io/) y tener conocimientos de como ejecutar un servidor en nuestra computadora de manera local, ya que este mismo se utiliza para hacer el método de caching para así poder hayar productos anteriormente buscados por nosotros mucho más rápido.
```

>Una vez instalado redis procedemos a clonar el repositorio con un 'Git clone https://github.com/EricGomez29/e-commerce.git' en una carpeta que quisieras tener el proyecto desde tu terminal o simplemente descargarlo como .ZIP.

>Luego abrimos la carpeta en la que se encuentra el proyecto desde su editor de codigo preferido como por ejemplo [Visual Studio Code](https://code.visualstudio.com/), una vez abierto desde el editor de codigo procedemos a hacer lo siguiente: 

> ```npm install  ```estando parados en la carpeta 'client' que pertenece al Front-end y luego en la carpeta 'api' que pertenece al Back-end hacemos lo mismo. Esto va a instalar todas las dependencias necesarias para correr el proyecto sin problemas

> ```npm start  ```estando parados en la carpeta 'client' que pertenece al Front-end y luego en la carpeta 'api' que pertenece al Back-end hacemos lo mismo. Esto va a ejecutar el proyecto de manera automática

## ¿Cómo funciona?

```
Para poder entender como esta funcionando todo es necesario entender que este proyecto esta realizado con un Back-end y un Front-end de manera básica, al realizar una búsquedad desde la barra de búsqueda hacemos una peticion a nuestro back-end que se encarga de realizar la peticion a la API de Mercado Libre mientras que al mismo tiempo esta guardando nuestra busquedad en el cache realizado con Redis que anteriormente mencionamos.
```
