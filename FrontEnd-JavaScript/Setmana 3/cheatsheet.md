## **Cheatsheet de JavaScript DOM (en català)**

!!!note "**Sel·lecció d'elements del DOM**"

    #### 1. **Mètodes per seleccionar elements del DOM**

    - **`getElementById()`**: Retorna el primer element amb l'ID especificat.

      ```javascript
      const element = document.getElementById("elMeuElement");
      ```

    - **`getElementsByClassName()`**: Retorna una col·lecció de tots els elements amb la classe especificada.

      ```javascript
      const elements = document.getElementsByClassName("laMeuaClasse");
      ```

    - **`getElementsByTagName()`**: Retorna una col·lecció de tots els elements amb el nom de la etiqueta especificada.

      ```javascript
      const elements = document.getElementsByTagName("div");
      ```

    - **`querySelector()`**: Retorna el primer element que coincideixi amb el selector CSS donat.

      ```javascript
      const element = document.querySelector(".laMeuaClasse");
      ```

    - **`querySelectorAll()`**: Retorna una llista de tots els elements que coincideixin amb el selector CSS donat.

      ```javascript
      const elements = document.querySelectorAll("p.laMeuaClasse");
      ```

!!!note "**Esdeveniments**"

    #### 1. **Assignar esdeveniments als elements (de pitjor a millor)**

    - **`<div>onclick</div>`**: Assigna un esdeveniment directament a l'atribut HTML de l'element.

      ```html
      <button id="elMeuBoto" onclick="alert('¡Has fet clic!')">Fes clic aquí</button>
      ```

        - També pot executar funcions definides a JavaScript. No és recomanat perquè barreja HTML i JavaScript, fent el codi menys net i més difícil de mantenir. No permet afegir múltiples esdeveniments al mateix element fàcilment.

          ```html
          <button id="elMeuBoto" onclick="laMeuaFuncio()">Fes clic aquí</button>
          <script>
            function laMeuaFuncio() {
              alert("¡Has fet clic!");
            }
          </script>
          ```

    - **`element.onclick = function() { ... }`**: Assigna una funció a l'esdeveniment `onclick` de l'element.

      ```javascript
      const button = document.querySelector("#elMeuBoto");
      button.onclick = function () {
        alert("¡Has fet clic!");
      };
      ```
        - Permet separar JavaScript de l'HTML, però només permet assignar una funció per esdeveniment. Si s'assigna una nova funció, es sobreescriu l'anterior.

    - **`addEventListener()`**: Assigna un esdeveniment a un element. Permet afegir múltiples esdeveniments a un mateix element.

      ```javascript
      const button = document.querySelector("#elMeuBoto");
      button.addEventListener("click", function () {
        alert("¡Has fet clic!");
      });
      button.addEventListener("mouseover",  () => {
        console.log("Aquest és un altre esdeveniment de passar el ratolí per damunt.");
      });
      ```
        - És la manera més recomanada d'assignar esdeveniments, ja que permet una millor organització del codi i afegir múltiples gestors d'esdeveniments sense sobreescriure'ls.


    !!!info "**Esdeveniments més comuns en JavaScript**:"

        - `click`: Quan l'usuari fa clic en un element.
        - `mouseover`: Quan el ratolí passa per sobre d’un element.
        - `mouseout`: Quan el ratolí surt d’un element.
        - `keydown`: Quan es prem una tecla.
        - `keyup`: Quan es deixa anar una tecla.
        - `submit`: Quan es fa un enviament de formulari.
        - `focus`: Quan un element obté el focus.
        - `blur`: Quan un element perd el focus.

!!!note "**Manipulació del contingut del DOM**"

    #### 1. **Afegir elements al DOM**

    - **`innerHTML`**: Permet obtenir o establir el contingut HTML d'un element. També es poden afegir elements al DOM amb aquest mètode.

      ```javascript
      const div = document.querySelector("#elMeuDiv");
      div.innerHTML = "<p>Nou contingut</p>";
      ```

    - **`createElement()`**: Crea un nou element HTML amb un tipus específic.

      ```javascript
      const nouElement = document.createElement("div");
      nouElement.innerHTML = "Sóc un nou div";
      ```

    - **`appendChild()`**: Afegeix un node com a fill d'un element específic.

      ```javascript
      const pare = document.querySelector("#pare");
      pare.appendChild(nouElement);
      ```

    - **`insertBefore()`**: Insereix un node abans d’un altre node dins del mateix element pare.

      ```javascript
      const germà = document.querySelector("#germà");
      pare.insertBefore(nouElement, germà);
      ```
    #### 2. **Moure elements al DOM**
    - **`appendChild()` o `insertBefore()`**: També es pot utilitzar per moure un element existent. En comptes de crear-lo nou, cal seleccionar-lo i afegir-lo a una nova posició.

      ```javascript
      const elementAMoure = document.querySelector("#elementAMoure");
      const nouPare = document.querySelector("#nouPare");
      nouPare.appendChild(elementAMoure); // Mou l'element al nou pare
      ```
    #### 3. **Eliminar elements del DOM**
    - **`remove()`**: Elimina un node del DOM.

      ```javascript
      const element = document.querySelector("#elMeuElement");
      element.remove();
      ```

    - **`removeChild()`**: Elimina un fill d'un element.

      ```javascript
      const pare = document.querySelector("#pare");
      const fill = document.querySelector("#fill");
      pare.removeChild(fill);
      ```

!!!note "**Selecció dels fills d'un element**"

    #### 1. **Primer fill (`firstChild`)**

    El mètode `firstChild` retorna el primer node fill d’un element. **Atenció**: aquest mètode pot retornar qualsevol tipus de node, inclòs un node de text (si l'element conté espais en blanc o salt de línia). Si només vols l'element HTML (no nodes de text o comentaris), has d'utilitzar `firstElementChild`.

    - **`firstChild`**: Retorna el primer node (pot ser un node de text, un element, etc.).

      ```javascript
      const pare = document.getElementById("contenidor");
      const primerFill = pare.firstChild;
      console.log(primerFill);
      ```

    - **`firstElementChild`**: Retorna el primer element fill (exclou nodes de text i comentaris).

      ```javascript
      const pare = document.getElementById("contenidor");
      const primerFillElement = pare.firstElementChild;
      console.log(primerFillElement);
      ```

    #### 2. **Últim fill (`lastChild`)**

    El mètode `lastChild` retorna l'últim node fill d’un element. Igual que `firstChild`, pot ser un node de text o un altre tipus de node. Per evitar nodes no desitjats, utilitza `lastElementChild`.

    - **`lastChild`**: Retorna l'últim node fill (pot ser un node de text, un element, etc.).

      ```javascript
      const pare = document.getElementById("contenidor");
      const ultimFill = pare.lastChild;
      console.log(ultimFill);
      ```

    - **`lastElementChild`**: Retorna l'últim element fill (exclou nodes de text i comentaris).

      ```javascript
      const pare = document.getElementById("contenidor");
      const ultimFillElement = pare.lastElementChild;
      console.log(ultimFillElement);
      ```

    #### 3. **Número de fills (`childElementCount`)**
    El mètode `childElementCount` retorna el nombre d'elements fills d’un element (exclou nodes de text i comentaris).

    ```javascript
    const pare = document.getElementById("contenidor");
    const nombreDeFills = pare.childElementCount;
    console.log(nombreDeFills); // Mostra el nombre d'elements fills
    ```

    #### 4. **Accedir als fills amb `children`**

    - **`children`**: Retorna una col·lecció en viu (live collection) de tots els fills de l'element que siguin nodes d'element (exclou text i comentaris).

      ```javascript
      const pare = document.getElementById("contenidor");
      const fills = pare.children;
      console.log(fills); // Col·lecció de tots els fills de tipus element
      ```

    #### 5. **Accedir al fill per la seva posició amb `childNodes`**

    - **`childNodes`**: Retorna una col·lecció de tots els fills de l'element, incloent-hi nodes de text, nodes de comentaris, etc.

      ```javascript
      const pare = document.getElementById("contenidor");
      const fillsNode = pare.childNodes;
      console.log(fillsNode); // Inclou tots els nodes: elements, text, comentaris, etc.
      ```

    #### 6. **Accedir al fill per la seva posició amb `nth-child` (CSS)**

    - **`nth-child()`**: És un selector CSS que pots utilitzar amb `querySelector()` per seleccionar un fill en base a la seva posició.

      ```javascript
      const tercerFill = document.querySelector("#contenidor p:nth-child(3)");
      console.log(tercerFill);
      ```

      - A aquest exemple es selecciona el tercer `p` dins del contenedor amb `id="contenidor"`.

!!!note "**Modificació dels atributs i propietats dels elements**"

    #### 1. **Modificació de l'atribut amb `setAttribute()` i `getAttribute()`**

    - **`setAttribute()`**: Estableix un valor per a un atribut d’un element.

      ```javascript
      const element = document.getElementById("elMeuBoto");
      element.setAttribute("class", "nouBoton");
      ```

    - **`getAttribute()`**: Obtén el valor d’un atribut d’un element.

      ```javascript
      const element = document.getElementById("elMeuBoto");
      const classe = element.getAttribute("class");
      console.log(classe);
      ```

    #### 2. **Modificar l'estil amb `style`**

    Per modificar l'estil CSS d'un element, pots utilitzar la propietat `style` per accedir als atributs CSS directament.
    - **`style.cssAttribute`**: Permet modificar les propietats CSS d’un element.

      ```javascript
      const element = document.getElementById("elMeuBoto");
      element.style.color = "red"; // Canvia el color a vermell
      element.style.fontSize = "20px"; // Canvia la mida de la font
      ```

    #### 3. **Afegir classes amb `classList`**

    La propietat `classList` permet afegir, eliminar i verificar classes d'un element:

    - **`add()`**: Afegeix una classe.

      ```javascript
      element.classList.add("nouBoto");
      ```

    - **`remove()`**: Elimina una classe.

      ```javascript
      element.classList.remove("nouBoto");
      ```

    - **`toggle()`**: Alterna l'estat d'una classe (la afegeix si no existeix, o la treu si existeix).

      ```javascript
      element.classList.toggle("visible");
      ```

    - **`contains()`**: Comprova si un element té una classe específica.

      ```javascript
      const teClasse = element.classList.contains("nouBoto");
      console.log(teClasse); // true o false
      ```

!!!note "**Funcions en JavaScript**"

    - **Funció normal**: Funció amb nom que es pot cridar diverses vegades i des de qualsevol lloc del codi.

      ```javascript
      function saludar() {
        alert("Hola!");
      }
      ```

    - **Funció anònima**: Funció sense nom, s’utilitza sovint en callbacks. Bàsicament agrupa el codi quan es produeix un esdeveniment.

      ```javascript
      const saludar = function () {
        alert("Hola!");
      };
      ```

    - **Funció de fletxa (Arrow Function)**: Sintaxi més concisa per a funcions anònimes.

      ```javascript
      const saludar = () => alert("Hola!");
      ```
