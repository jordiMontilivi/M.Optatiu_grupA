### **Exercicis Pràctics**

Ara que tenim el **cheatsheet**, passarem als **exercicis pràctics** per aplicar els conceptes. Cada exercici té HTML, CSS i JavaScript, i es pot executar directament en un fitxer HTML.

#### **Exercici 1: Selecció d'Elements del DOM**

**Objectiu**: Familiaritzar-se amb els mètodes de selecció d'elements: `getElementById()`, `getElementsByClassName()`, `querySelector()`, etc.

**HTML**:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici DOM - Selecció d'Elements</title>
    <style>
      .laMeuaClasse {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 id="titol">Hola món</h1>
    <p class="laMeuaClasse">
      Aquest és un paràgraf amb la classe "laMeuaClasse".
    </p>
    <div id="contingut">
      <p>Un altre paràgraf dins d’un div.</p>
      <button id="elMeuBoton">Fes clic aquí</button>
    </div>

    <script>
      // Exercici: Fer servir els mètodes de selecció d'elements
      const titol = document.getElementById("titol");
      const paragraf = document.querySelector(".laMeuaClasse");
      const button = document.querySelector("#elMeuBoton");
      console.log(titol, paragraf, button);
    </script>
  </body>
</html>
```

**Instruccions**:

- Utilitza `getElementById()` per seleccionar el títol.
- Usa `querySelector()` per seleccionar el paràgraf amb la classe `laMeuaClasse`.
- Imprimeix els elements a la consola.

---

#### **Exercici 2: Assignar Esdeveniments**

**Objectiu**: Assignar esdeveniments a elements del DOM utilitzant `addEventListener()`.

**HTML**:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici DOM - Esdeveniments</title>
  </head>
  <body>
    <button id="elMeuBoton">Fes clic per canviar el color</button>
    <p id="paragraf">Aquest text canviarà de color quan facis clic al botó.</p>

    <script>
      // Exercici: Assignar un esdeveniment de clic
      const button = document.getElementById("elMeuBoton");
      const paragraf = document.getElementById("paragraf");

      button.addEventListener("click", () => {
        paragraf.style.color = "blue";
      });
    </script>
  </body>
</html>
```

**Instruccions**:

- Assigna un esdeveniment `click` al botó.
- Quan es faci clic al botó, canvia el color del text del paràgraf a blau.

---

#### **Exercici 3: Crear i Manipular Elements al DOM**

**Objectiu**: Crear nous elements i manipular la seva posició al DOM.

**HTML**:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici DOM - Crear Elements</title>
  </head>
  <body>
    <div id="contenidor">
      <button id="afegir">Afegir un nou div</button>
    </div>

    <script>
      // Exercici: Crear un nou div i afegir-lo al contenidor
      const contenidor = document.getElementById("contenidor");
      const botonAfegir = document.getElementById("afegir");

      botonAfegir.addEventListener("click", () => {
        // Crear el nou div
        const nouDiv = document.createElement("div");
        nouDiv.innerHTML = "Sóc un nou div creat dinàlaMeuaCament";

        // Afegir el div al contenidor
        contenidor.appendChild(nouDiv);
      });
    </script>
  </body>
</html>
```

**Instruccions**:

- Crea un nou `div` quan l'usuari faci clic al botó.
- El nou `div` s'ha d'afegir al contenidor existent.

---

#### **Exercici 4: Eliminar Elements del DOM**

**Objectiu**: Eliminar elements del DOM.

**HTML**:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Exercici DOM - Eliminar Elements</title>
  </head>
  <body>
    <div id="contenidor">
      <p id="paragraf">
        Aquest paràgraf serà eliminat quan facis clic al botó.
      </p>
      <button id="eliminar">Eliminar paràgraf</button>
    </div>

    <script>
      // Exercici: Eliminar un paràgraf
      const botonEliminar = document.getElementById("eliminar");
      const paragraf = document.getElementById("paragraf");

      botonEliminar.addEventListener("click", () => {
        paragraf.remove();
      });
    </script>
  </body>
</html>
```

**Instruccions**:

- Elimina el paràgraf quan l'usuari faci clic al botó.

---

### **Exemple Pràctic: Accedir al Primer i Últim Fill**

A continuació, et deixo un exemple pràctic que fa servir els mètodes `firstElementChild` i `lastElementChild`, així com altres maneres d'accedir als fills.

**HTML**:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici - Primer i Últim Fill</title>
  </head>
  <body>
    <div id="contenidor">
      <p>Primer paràgraf</p>
      <p>Segon paràgraf</p>
      <p>Últim paràgraf</p>
    </div>

    <script>
      // Accedir al primer fill i últim fill
      const contenidor = document.getElementById("contenidor");

      const primerFill = contenidor.firstElementChild; // Primer fill
      const ultimFill = contenidor.lastElementChild; // Últim fill

      console.log("Primer fill:", primerFill);
      console.log("Últim fill:", ultimFill);

      // Accedir a tots els fills amb children
      const totsElsFills = contenidor.children;
      console.log("Tots els fills:", totsElsFills);
    </script>
  </body>
</html>
```

**Instruccions**:

1. Es mostra el primer i últim fill de l'element `contenidor` amb `firstElementChild` i `lastElementChild`.
2. També es mostren tots els fills amb la propietat `children`.

---

### **Conclusió**

Aquests mètodes proporcionen una gran flexibilitat per manipular els elements del DOM i gestionar la seva estructura. A més de seleccionar fills, també pots afegir, eliminar, i modificar elements de manera eficient. Amb aquestes eines, pots construir una gran varietat d'interaccions dinàmiques a la teva pàgina web.

Si tens més preguntes o vols veure més exemples pràctics, no dubtis en preguntar!
