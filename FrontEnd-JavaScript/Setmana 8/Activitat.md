## Activitat: Anàlisi i adaptació d’un carrusell d’imatges amb JavaScript

### Objectiu de l’activitat

L’objectiu d’aquesta activitat és **entendre, documentar i adaptar** el funcionament d’un carrusell d’imatges fet amb JavaScript, per tal de poder reutilitzar-lo posteriorment en un **projecte FrontEnd real**.

### Part 1: Anàlisi del codi existent

1. Obri el fitxer original del carrusell.
2. **Documenta el codi**, explicant amb comentaris:
   - Que fa cada part del codi (funcions, elements HTML, etc.)
   - Com funciona el carrusell
   - Com es gestionen les imatges en cada paginació del carrusell

3. Reanomena aquest fitxer com:

   ```
   carrussell_Old.html
   ```

### Part 2: Separació del codi

4. A partir del fitxer original, crea un nou carrusell amb el nom:

   ```
   carrussell.html
   ```

5. Modifica el projecte per **separar correctament el codi** en:
   - `carrussell.html` → estructura
   - `styles.css` → estil
   - `script.js` → lògica JavaScript
   - carpeta: `images/` → imatges del carrusell que has de posar manualment

### Part 3: Modificacions en el JavaScript

6. Actualment, el carrusell simula que l’array d’imatges prové d’un **backEnd** (array d’objectes JSON).
   Modifica aquest comportament perquè:
   - S’elimine la simulació del backEnd.
   - S’afegisca un **botó per carregar imatges** a un array.
   - Aquest array es **guarde en el `localStorage`**.
   - S’afegisca un altre **botó per recuperar les imatges del `localStorage`**.
   - Les imatges recuperades es mostren correctament dins del carrusell.

### Part 4: Investigació i adaptació

7. Prova diferents comportaments del carrusell:
   - Fer un temporitzador amb setTimeout per a canviar automàticament les imatges
   - Canviar l’ordre de les imatges

8. **Investiga i experimenta** amb el codi per entendre’l bé, ja que aquest carrusell pot ser utilitzat **directament** (o amb petites adaptacions) en el **projecte final de FrontEnd**.
