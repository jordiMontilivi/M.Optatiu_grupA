
# Declaració de Variables en JavaScript

En JavaScript, hi ha tres maneres principals de declarar variables: `var`, `let`, i `const`. Cadascuna té característiques i àmbits diferents. A continuació es detallen les seves diferències i les bones pràctiques per utilitzar-les.

---

## 1. `var`
### Descripció:
- **Àmbit:** __Funció__ (si es declara dins d'una funció) o __global__ (si es declara fora de qualsevol funció).
- **Alcanç:** Pot ser redeclarada dins del mateix àmbit i no té bloqueig d'àmbit (scope).
- **Estat actual:** __En desús__, no es recomana el seu ús en nous projectes.

### Exemple:
```javascript
function exempleVar() {
  if (true) {
    var x = 10; // x és accessible fora del bloc if
  }
  console.log(x); // 10
}
exempleVar();
```

### Problemes:

* `var` no té bloqueig d'àmbit, la qual cosa pot causar problemes a l'hora de gestionar el codi.
* Pot ser redeclarada dins de l'àmbit, el que pot generar confusions.

---

## 2. `let`

### Descripció:

* **Àmbit:** Bloc (bloc de codi, com dins de bucles, condicions, etc.)
* **Alcanç:** Pot ser modificada però no redeclarada dins del mateix bloc.
* **Bones pràctiques:** És la millor opció per a la majoria de les declaracions de variables, ja que ofereix un millor control de l'àmbit.

### Exemple:

```javascript
function exempleLet() {
  if (true) {
    let y = 20; // y només és accessible dins del bloc if
    console.log(y); // 20
  }
  console.log(y); // Error: y no està definit
}
exempleLet();
```

### Bones pràctiques:

* Ús recomanat en lloc de `var` per a declaracions de variables dins de blocs.

---

## 3. `const`

### Descripció:

* **Àmbit:** Bloc (com `let`).
* **Alcanç:** No pot ser reassignada un cop definida (és constant), però si és un objecte o un array, es poden modificar les seves propietats o elements.
* **Bones pràctiques:** S'hauria de fer servir per a variables que no han de canviar el seu valor un cop assignades.

### Exemple:

```javascript
function exempleConst() {
  const z = 30;
  console.log(z); // 30
  // z = 40; // Error: Assignació a una variable de tipus const no permesa.
}

const obj = { nom: "Joan" };
obj.nom = "Pau"; // Permès, perquè l'objecte pot ser modificat, però no la variable que apunta a ell
```

### Bones pràctiques:

* Ús recomanat per a valors que no han de ser modificats o variables de tipus array o objecte (no modifiquem el tipus però si podem modificar el seu valor). Proporciona seguretat en el codi i facilita la comprensió. 

---

## Resum de Bones Pràctiques

1. **Evitar `var`:** És millor evitar l'ús de `var` per a evitar errors relacionats amb l'àmbit i la redeclaració de variables.
2. **Preferir `let` per a variables que poden canviar:** Ús de `let` per a declaracions dins de blocs on es preveu que el valor de la variable canviï.
3. **Fer servir `const` per a variables que no canviaran:** Utilitzar `const` per a aquelles variables que mai han de ser reassignades (com a constants).

---

## Taula Comparativa

| Característica       | `var`                        | `let`                                   | `const`                                       |
| -------------------- | ---------------------------- | --------------------------------------- | --------------------------------------------- |
| **Àmbit**            | Funció o global              | Bloc (bloc de codi)                 | Bloc (bloc de codi)                       |
| **Reassignació**     | Permès                       | Permès                                  | No permès (només per a assignacions inicials) |
| **Redeclaració**     | Permès dins del mateix àmbit | No permès dins del mateix bloc          | No permès dins del mateix bloc                |
| **Bones pràctiques** | Desaconsellat                | Recomendat per a variables modificables | Recomendat per a constants, arrays i objectes                   |

---

## Conclusió

* **`let`** i **`const`** són els estàndards actuals a seguir, amb **`const`** sent preferit per a qualsevol valor que no hagi de canviar.
* **`var`** està en desús i només hauria de ser utilitzat en casos molt específics o en codi antic.

Les **variables globals sense identificador** (a vegades anomenades **variables globals implícites**) en JavaScript es refereixen a aquelles variables que s'assignen sense declarar explícitament amb les paraules clau `var`, `let` o `const`. Quan es fa això en el context d'una funció, la variable s'afegeix automàticament a l'objecte global (en un navegador, aquest objecte és `window`).

## 4. Variables Globals Sense Identificador
### Com es crea una variable global sense identificador?

Quan assignem un valor a una variable sense usar `var`, `let`, ni `const` dins d'una funció o en el codi global, aquesta variable es converteix en global (i s'afegeix al context global).

### Exemple:

```javascript
function crearGlobal() {
  a = 10; // Variable global sense identificador
}

crearGlobal();
console.log(a); // 10, a es global ara
```

En aquest exemple, la variable `a` es crea dins de la funció `crearGlobal()`, però al no estar declarada amb `var`, `let` o `const`, es converteix en una variable global i es pot accedir des de qualsevol lloc del codi posterior.

### Problemes i inconvenients:

1. **Contaminació de l'espai de noms global:** Les variables globals sense identificador poden ser modificades accidentalment en altres parts del codi, la qual cosa pot causar conflictes entre variables o problemes difícils de detectar.

2. **Dificultats en el manteniment del codi:** Aquest tipus de variables fan que sigui més difícil controlar el flux de dades i el comportament del programa, ja que no és evident quines variables són globals i quines no.

3. **No és compatible amb les bones pràctiques:** Assignar variables globals de manera implícita trenca les bones pràctiques de programació, que busquen evitar l'ús excessiu de l'espai global per minimitzar possibles errors i conflictes.

### Evitar la creació de variables globals implícites:

Per evitar que les variables es converteixin en globals accidentals, s'hauria d'evitar l'assignació de valors sense declarar-les prèviament amb `var`, `let` o `const`.

### Exemples de bones pràctiques:

#### 1. **Declaració explícita amb `let` o `const`:**

```javascript
let a = 10;  // Variable local
```

#### 2. **En l'àmbit global, utilitzar una manera controlada per declarar globals:**

Si és absolutament necessari crear una variable global, es recomana declarar-la explícitament en l'àmbit global, fora de qualsevol funció, o en un objecte global dedicat per evitar contaminacions accidentals.

```javascript
// Exemple de variable global controlada
window.meuValorGlobal = 20;
console.log(window.meuValorGlobal); // 20
```

### Conclusió:

Les variables globals sense identificador són perilloses i s'han de evitar en la mesura del possible. Utilitzar `let`, `const` o `var` garanteix un millor control sobre l'àmbit de les variables i evita molts errors difícils de detectar. Si cal una variable global, assegura't de declarar-la explícitament per evitar afectacions no desitjades a l'espai global.
