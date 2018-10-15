# Ejercicio de HTTP Basic

Ejercicio sobre autentificación BASIC.

Para poner en marcha el proyecto en local

```bash
#instalar las dependencias
npm i 
#arrancar el servidor
nodemon main.js
```

La aplicación web permite hacer login (hay dos usuarios: "adi"/"adi" y "pepe/pepe"), y una vez hecho esto todas las operaciones envían usuario y password en el formato esperado por HTTP Basic.

No obstante podemos ver que el servidor no chequea esas credenciales, si accedemos por ejemplo a   `http://localhost:3000/api/items` poniendo la URL manualmente funciona, aunque no debería ya que no estamos enviando ni login ni password.

    ACLARACION: si estáis probándolo en glitch.com será `http://nombre-del-proyecto-glitch/api/items`, evidentemente no será `localhost` pero en glitch tampoco se pone el puerto, está redirigido automáticamente

Para corregir el servidor falta completar la función `checkAuth()` de `api.js`
