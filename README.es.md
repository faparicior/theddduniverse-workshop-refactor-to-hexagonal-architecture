# Aprende DDD paso a paso, usando las cartas de "The DDD universe"

En esta serie de workshops trabajaremos sobre un código muy básico y llano. 
Deberemos enfrentarnos a pequeños retos para pasarlo a una estructura más acorde con los estándares actuales de DDD.

## Escenario

Somos una startup que quiere recuperar la simplicidad de publicar anuncios imitando como se hacía antaño. 
Antes se pegaban carteles en las calles o en tablones de anuncios publicitando cosas. Nuestra startup quiere recuperar esa idea pero en un formato digital. Ahora existen paneles digitales en los centros cívicos y tenemos un acuerdo para publicar en ellos.

Empezamos la prueba de concepto con un centro cívico cercano a nuestras oficinas.

## Funcionalidad prueba de concepto

- Cada usuario puede publicar tantos anuncios como quiera.
- Al ser una prueba de concepto, no existe gestión de usuarios o sistema de supervisión de anuncios como tal.
- Para evitar anuncios no deseados, los responsables del centro cívico son los encargados de crear los anuncios y publicarlos en el sistema.
- Cada anuncio tiene un password que permite modificar su contenido o borrarlo. En este caso decidimos usar como password el número de carnet del centro cívico del anunciante.
- Cuando el anuncio se publica, el anunciante recibe un identificador para poder referenciar al anuncio si quiere modificarlo o quitarlo en un futuro. Pero el único que puede hacerlo sigue siendo la persona responsable del centro cívico.

## Problema
Nuestro código es un MVP y parece que empezamos a tener buen feedback. El centro cívico nos está enviando nuevas ideas que seguramente tengamos que hacer realidad, con lo que hemos decidido poner un poco de orden en el código antes de que muramos de éxito al escalar la idea.

## Hacia una solución

Nos han dicho que usando Arquitectura hexagonal con DDD podremos mitigar bastantes problemas y nos ayudará a escalar nuestro producto a nivel técnico, dándonos agilidad (o eso esperamos).

## Tenemos un aliado. Tests e2e en nuestra API

Por suerte disponemos de tests que verifican el resultado final de nuestra API, con lo que podemos refactorizar con calma nuestro código.

### [Guión para facilitadores](doc/es/refactor-a-arquitectura-hexagonal.md)
