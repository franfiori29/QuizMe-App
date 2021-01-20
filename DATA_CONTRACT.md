### Flow

##### Antes de empezar cualquier daily:

-   Parado en **'dev'**: `git pull`, para traer los ultimos cambios.
-   Crear branch para la nueva tarea: `git checkout -b 'nombre'`.
-   Trabajar normalmente sobre la nueva rama
-   Pushear a la nueva rama.
-   Pedir pull request a **'dev'** el cual tienen que aceptar al menos una persona.
-   En el caso de que haya pasado mucho tiempo desde que se empezo la tarea o si otra persona hizo un PullRequest :

```sh
$ git checkout dev
$ git pull
```

> Esto es para mantener tu dev actualizado al último cambio.

-   Despues de cada **Sprint** o de algun cambio **importante** en el proyecto hacer merge a los cambios (ya testeados) de **'dev'** a **'master'**, esto se hace con todo el grupo de trabajo presente.

### Branches

-   Idioma de nombres: **Inglés**.
-   Formato de nombres : `'descripcion'-'version/id'` .
    > Ejemplo: `$ git checkout -b bugfix-0.1`
-   Usar nombres _descriptivos_ (recordar que cualquiera puede acceder a los nombres de los commits).
-   `CUIDADO CON LA MASTER!`

# Sintáxis y Código

### Identación

-   Antes de pushear cualquier cambio asegurarse de que el codigo este identado con el estandar elegido por el grupo.
-   Prettier.
-   Tab = 4 espacios.
-   Comillas simples.

### Scaffolding

-   **Idioma**: Inglés.
-   **Carpetas**: Todo en **camelCase**.
-   **Archivos**: Siempre con **camelCase** (excepciones react components, etc..).

### Code Syntax

-   **Idioma**: Inglés.
-   Funciones, variables y modelado en **camelCase**, costantes fijas en **UPPERCASE** y **Snake_Case** (puede haber excepciones, por ejemplo redux actions)
-   Utilizar nombres **descriptivos** para las variables.
-   No usar tildes ni caracteres especiales.
-   **Comentar** el código de forma descriptiva y concisa con la menor cantidad de palabras posible, ya que todos vamos a tener que leer los comentarios de los otros.
-   **Nombres de clases**: van en metodologia BEM.
