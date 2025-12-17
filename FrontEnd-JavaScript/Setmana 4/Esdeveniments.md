# Sessió 4 – Esdeveniments

## Exercicis pràctics d’esdeveniments en JavaScript
___

**Exercici 1**
Quan es fa clic al botó, mostra un alert amb el text:
"Has fet clic al botó"

___

**Exercici 2**
Modifica aquest funcionament de clic: quan es fa clic al botó:

Canvia el text de la caixa a "Clic detectat"

- Fes que el botó funcione utilitzant:

  - onclick
  - addEventListener

___

**Exercici 3**
Quan es fa doble clic al botó:
Canvia el text de la caixa a "Doble clic detectat"

___

**Exercici 2b**
Afegeix que el botó canvie de color a verd.

**Exercici 2c**
Afegeix que el boto desactive el seu propi esdeveniment després del primer clic.

**Exercici 2d**
Afegeix que al fer clic sobre el botó ha de desactivar aquest botó `.disabled = true;` ademés ha de crear un nou botó que torne a activar el botó i l'esdeveniment original que s'eliminarà al clicar-lo.

**Exercici 4**
Quan es fa clic al botó:
Canvia el color de fons de la caixa a lightblue, li pose un borde blau fosc i borde arrodonit (de 10px). Amb el text "Estil canviat!"

**Exercici 5**
Cada clic:
Alterna el color de la caixa entre lightgray i lightgreen amb una nova classe CSS i utilitzant `classList.toggle`.

**Exercici 6**
Afegeix un segon botó al HTML:

```html
html<button id="reset">Reset</button>
```

Quan es fa clic a Reset:
Torna la caixa al seu estat inicial

Múltiples esdeveniments del ratolí
**Exercici 7**
Quan el ratolí entra dins la caixa (mouseover):

- Canvia el text a "Ratolí dins"

Quan ix (mouseout):

- Torna al text original

**Exercici 8**
Mostra dins la caixa les coordenades del ratolí (mousemove):
x: **_ y: _**

**Exercici 8b (work in progress)**
Afegeix 🎯 dintre de la caixa dintre d'un `span` i situa'l utilitzant el `display:flex` a la caixa on tu vulguis (queda't amb les coordenades on l'has afegit). Si fas click amb el ratolí a dintre de la diana, que et mostri un `alert("diana")` i en cas que el click estigui a fora `alert("fora diana")`

**Exercici 9**
Quan es prem qualsevol botó del ratolí dins la caixa (mousedown):

Mostra quin botó s’ha apretat (0, 1 o 2)

**Exercici 10**
Fixa't que el botó dret desplega un menú contextual. Evita que aparega el menú contextual en fer clic dret sobre la caixa.

**Exercici 11**
Afegeix un enllaç:

```html
html<a href="https://google.com" id="enllac">Anar a Google</a>
```

Quan es fa clic:

Evita el canvi de pàgina

Mostra un alert

Teclat i focus
**Exercici 12**
Afegeix un input de text:

```html
html<input type="text" id="entrada" />
```

Quan es prem una tecla:
Mostra la tecla dins la caixa, per exemple: "Has apretat la tecla: A"
Afegeix al text la paraula "Majuscula" si s’ha apretat la tecla Shift.

**Exercici 13**
Evita que l’usuari puga escriure números dins l’input.

**Exercici 14**
Quan l’input:

- guanya focus → caixa verd clar i el borde verd fosc
- perd focus → caixa gris clar

**Exercici 15**
Assigna dues funcions diferents al click del botó i comprova que s’executen totes dues, obviament solament podràs fer-ho amb addEventListener.

**Exercici 16**
Crea un botó “Nova caixa secreta” que:
Cree una nova caixa amb el mateix estil i elimine event de clic després de ser utilitzat.
En fer clic sobre una caixa, s’elimine la caixa i el botó Nova caixa secreta.

**Exercici 16b (ho vorem més endavant, però ho provem ara)**
Modifica l’exercici anterior per a que les caixes creades tinguen un color de fons aleatori, i que s'elimine al passar 3 segons des de la seua creació si no s'ha fet clic sobre ella.

```js
setTimeout(eliminaElements, 3000); // funció a la que cridem i temps en milisegons
// bàsicament espera 3 segons i crida la funció eliminaElements
```
