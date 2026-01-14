# Exercici 1: esdeveniment `load`

Crea una pàgina web amb un paràgraf que mostre el text **“Carregant la pàgina…”**, en fons vermell i text blanc.

Utilitza `addEventListener` amb l’esdeveniment **`load`** del `window` perquè, quan la pàgina s’haja carregat completament, el text del paràgraf canvie per un altre missatge i el seu color també canvie.
Simula la carrega lenta de la pàgina amb les opcions de Network del navegador chrome.

# Exercici 2: esdeveniment `beforeunload`

Crea una pàgina web amb un text que indique que l’usuari està dins de la pàgina.

Utilitza `addEventListener` amb l’esdeveniment **`beforeunload`** del `window` perquè, quan l’usuari intente eixir de la pàgina (tancar la pestanya, recarregar o canviar d’URL), aparega un avís de confirmació.

Comprova el funcionament intentant recarregar o tancar la pàgina.

# Exercici 3: esdeveniment `resize`

Crea una pàgina web que mostre l’amplada i l’alçada de la finestra del navegador en un requadre de text en format amplada:alçada (per exemple 1024:768).

Utilitza l’esdeveniment **`resize`** del `window` perquè les dades s’actualitzen cada vegada que es canvie la mida de la finestra.

# Exercici 4: esdeveniment `scroll`

Crea una pàgina web amb un requadre de text que mostre la posició actual del scroll vertical de la finestra del navegador.
Utilitza l’esdeveniment **`scroll`** del `window` perquè la posició s’actualitze cada vegada que es faça scroll a la pàgina.

# Exercici 5: esdeveniment `scroll` amb imatges

Crea una pàgina web amb dos `div` principals col·locats un al costat de l’altre.

- A l’esquerra, un `div` amb prou text de descripció d’un Pokémon perquè tinga scroll vertical.
- A la dreta, un `div` que mostre una imatge del Pokémon.

Utilitza l’esdeveniment `scroll` del `div` del text perquè:

- Del **0% al 33%** del scroll es mostre la **primera imatge**
- Del **34% al 66%** es mostre la **segona imatge**
- Del **67% al 100%** es mostre la **tercera imatge**

Les imatges han de canviar automàticament mentre l’usuari fa scroll.

# Exercici 6: esdeveniments `focus` i `blur`

Crea un formulari amb **tres camps de text (`input`)**, sense `label` ni botó d’enviament.
Els camps seran: **nom**, **cognoms** i **email**.

Utilitza els esdeveniments **`focus`** i **`blur`** perquè els camps reaccionen de la manera següent:

- **Quan un camp rep el focus (`focus`)**:

  - El fons passa a **groc clar**
  - El text és de color **negre**
  - Apareix un **label genèric** amb un missatge adequat (per exemple: _“Introdueix el teu nom”_)

- **Quan un camp perd el focus (`blur`)**:

  - El fons torna a **blanc**
  - El text continua sent **negre**
  - El label desapareix
  - Si el camp està buit:

    - Es mostra un text dins del camp (per exemple: _“Camp obligatori”_)
    - El fons passa a **vermell clar**

Comprova el funcionament fent clic dins i fora de cada camp de text.

# Exercici 7: esdeveniment `change`

Crea un formulari amb un `select`.

Utilitza l’esdeveniment **`change`** perquè es mostre un missatge quan el valor del camp canvie.

# Exercici 8: esdeveniments `input` | `select` | `copy` | `cut` | `paste` no tinc massa temps per pensar un exercici amb aquestos esdeveniments, per la qual cosa us deixe a vosaltres qeu penseu un exercici amb ells, així veieu com funcionen i investigar i provar per vosaltres mateixos.

p.d: falta fer exercicis per a cancelació d'esdeveniments i propagació d'esdeveniments. Atents a futures actualitzacions.
