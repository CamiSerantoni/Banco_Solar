#  Desafío - Banco Solar 🏦


Este repositorio contiene el código fuente de la aplicación web desarrollada para el desafío en el que validaremos nuestros conocimientos sobre validaremos nuestros conocimientos de Conectar una base de datos
PostgreSQL con Node, Realizar consultas DML con Node y el paquete pg. Realizar consultas TCL con Node y el paquete pg, Construir una API RESTful utilizando PostgreSQL para la 
persistencia de datos, Manejar errores y Manejar códigos de estado HTTP.


## Descripción de la solución 💻

El Banco Solar acaba de decidir invertir una importante suma de dinero para contratar un equipo de desarrolladores Full Stack que desarrollen un nuevo sistema de transferencias, y
han anunciado que todo aquel que postule al cargo debe realizar un servidor con Node que utilice PostgreSQL para la gestión y persistencia de datos, y simular un sistema de
transferencias.
El sistema debe permitir registrar nuevos usuarios con un balance inicial y basados en estos, realizar transferencias de saldos entre ellos.


Siguiendo esta gráfica: 

![image](https://github.com/CamiSerantoni/Banco_Solar/assets/152921799/1bcb46ab-52a2-46bc-b46b-ed37f9821cad)



## Requerimientos: 📊📎🧮

1. Utilizar el paquete pg para conectarse a PostgreSQL y realizar consultas DML para la gestión y persistencia de datos. (3 Puntos)
2. Usar transacciones SQL para realizar el registro de las transferencias. (2 Puntos)
3. Servir una API RESTful en el servidor con los datos de los usuarios almacenados en PostgreSQL. (3 Puntos)
4. Capturar los posibles errores que puedan ocurrir a través de bloques catch o parámetros de funciones callbacks para condicionar las funciones del servidor. (1 Punto)
5. Devolver correctamente los códigos de estado según las diferentes situaciones. (1 Punto)

Las rutas a disponibilizar son las siguientes:

● / GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
● /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
● /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
● /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
● /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
● /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe
ocupar una transacción SQL en la consulta a la base de datos.
● /transferencias GET: Devuelve todas las transferencias almacenadas en la base de
datos en formato de arreglo.



## Estructura del Proyecto 🩻

El proyecto está estructurado de la siguiente manera:

 ![image](https://github.com/CamiSerantoni/Mi_repertorio/assets/152921799/76ae5821-849e-46b5-9232-22bfa0ecee6a)

En busca de seguir los lineamientoes de la arquitectura MVC

## Dependencias 🪢

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Para la creación del servidor web.
- **Axios**
- **Bootstrap**
- **Pg**
- **Dotenv**

## Requisitos y Configuración 🔩🛠️🧰

Para ejecutar el proyecto localmente, asegúrate de tener instalado Node.js y npm. Luego, sigue estos pasos:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Accede al directorio del proyecto: `cd <nombre_del_directorio>`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia el servidor local: `npm run dev`
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.


