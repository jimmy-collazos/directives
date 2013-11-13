Directives
==========

Ejercicios para aprender a usar/crear directivas de angularJS

#### Instalación
Antes de nada es necesario tener instalado [ **nodejs** y **npm**](http://nodejs.org/download/) en nuestra maquina para poder ejecutar los tests.

Una ves tengamos instalado `npm` podremos bajarnos las dependencias del proyecto. Nos ponemos en la raíz del proyecto y ejecutamos, desde la consola:
```
npm install
```
Si utiliza Windows tendrá que ejecutar:
```
npm install -g karma
```

#### Ejecutando nuestros tests
Para facilitar la ejecución de los tests he creado un script, pero lo primero es darle permisos de ejecución. En mi caso uso un nix y lo hago de la siguiente manera:
```
chmod a+x test/test.sh
```
Ahora sólo tenemos que lanzar el script para que pueda funcionar:
```
./test/test.sh
```