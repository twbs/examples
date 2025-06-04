# Comment ajouter un favicon en 2025 ?

## Trois fichiers qui répondent à presque tous les besoins

> article traduit : [https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs](source)

Il est temps de repenser la façon de créer des favicons pour les navigateurs modernes et d'arrêter cette folie des générateurs d'icônes.
Les développeurs frontend doivent actuellement gérer **20 fichiers** PNG statiques pour afficher un petit logo de site web dans une fenêtre de navigateur ou sur un écran tactile. Lisez notre article pour découvrir comment **adopter une approche plus intelligente** et opter pour une collection d'icônes minimaliste qui répond aux besoins modernes.

---

Le sujet des favicons s'est avéré plus exhaustif qu'on aurait pu le souhaiter, c'est pourquoi j'ai également résumé l'article entier en seulement deux extraits de code pour ceux qui ont déjà assez souffert et qui savent exactement ce qu'il faut faire.

## La version extrêmement courte 🚀

Au lieu de servir des dizaines d'icônes, tout ce dont vous avez besoin, c'est de cinq icônes et d'un fichier JSON.

Pour le navigateur utilisant HTML :
```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- 180×180 -->
```

Si vous créez une PWA (Progressive Web App),
ajoutez également ceci au HTML

```html
<link rel="manifest" href="/manifest.webmanifest">
```

Et le fichier avec le manifeste de l'application Web :

```json
// manifest.webmanifest
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-mask.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

> Generateur de Manifest pour PWA
> <https://manifest-gen.netlify.app/>

> Si vous avez un site web public, il doit avoir une favicon. Malheureusement, ce que les utilisateurs perçoivent comme une seule icône en est en réalité une multitude .

### La version longue, où tout est expliqué 🚴‍♀️

Le concept de favicon, abréviation de « *icône favorite* », existe depuis le début des années 2000.
Nous avons tous déjà vu ces jolies petites images dans la barre d'onglets de notre navigateur, qui nous permettent de différencier les sites web que nous consultons. Les utilisateurs s'attendent à ce que votre site web ait un favicon.
C'est l'une de ces petites choses qui vous font prendre au sérieux.

Même Apple, qui a toujours eu un problème esthétique avec les icônes qui ne viennent pas de Cupertino, minimisant les favicons dans Safari pendant des années, a finalement abandonné et les affiche désormais correctement sur tous ses appareils.

Si vous avez un site web public, **il doit avoir une favicon**. Malheureusement, ce que les utilisateurs perçoivent comme une seule icône en est en réalité une multitude .

Il est donc courant de confier la tâche fastidieuse de générer ces fichiers nécessaires à une liste toujours croissante d'écrans et d'appareils à des outils de création de favicons. Personne de sensé ne voudrait passer des heures à les créer à la main. Après tout, nous sommes là pour créer des sites web, pas pour satisfaire les éditeurs de navigateurs.

Un ensemble de favicons générés par un générateur en ligne populaire

- Quel est l'ensemble d'icônes de site web le plus efficace ?
- Quels formats sont obsolètes ?
- Quels types d'icônes peuvent être remplacés par de légers arbitrage ?

Une liste minimale de favicons qui fonctionneront dans tous les cas et dans tous les navigateurs, à l'exception de certains cas extrêmes, et même dans ce cas, cela fonctionnera toujours, mais pas à 100 % parfaitement.

**La configuration ultime du favicon**
Au lieu de créer de nombreuses images de tailles différentes, on opte pour le SVG.

Les navigateurs téléchargent les favicons en arrière-plan, donc une image de favicon plus grande n'affecte pas les performances du site Web.
**SVG** est un excellent moyen de réduire la taille des images qui ne sont pas censées être des bitmaps en premier lieu ; pour de nombreux logos, *le fichier résultant sera beaucoup plus petit qu'un PNG*.

Avec seulement trois images PNG dans cet ensemble minimum, vous pouvez utiliser des outils avancés pour optimiser leur taille. Cela résout un problème pour les internautes ne disposant pas de forfaits de données illimités.

Je vais maintenant vous dévoiler l'ensemble minimal d'icônes que j'ai créé au cours de mes recherches et de mes exercices. Cette liste devrait fonctionner avec tous les navigateurs et appareils courants, anciens comme nouveaux.

#### 1️⃣ favicon.ico pour les anciens navigateurs

Les fichiers ICO possèdent une structure de répertoires et peuvent regrouper des fichiers de différentes résolutions. Je recommande de s'en tenir à une seule image 32×32, sauf si celle que vous possédez ne se réduit pas facilement au format 16×16 (si elle devient floue, par exemple).
Dans ce cas, vous pouvez demander à votre graphiste de créer une version spéciale du logo, adaptée aux petites grilles de pixels.

<https://example.com> Le site web devrait avoir un favicon <https://example.com/favicon.ico>.
Certains outils, comme les lecteurs RSS, se contentent de faire une requête /favicon.ico au serveur et ne cherchent pas ailleurs.

#### 2️⃣ Une icône SVG unique avec une version claire/foncée pour les navigateurs modernes

`SVG` est un format vectoriel qui décrit des courbes plutôt que des pixels.
En grande taille, il est plus performant que les images matricielles.
**À ce jour, 72 % des navigateurs** prennent en charge les icônes SVG.

Votre page HTML doit avoir une `<link>` balise dans son `<head>` avec `rel="icon"`, `type="image/svg+xml"` et avec le `href` contenant un lien vers le fichier `SVG` comme attributs.

`SVG` est un format `XML` et peut contenir une `<style>` balise décrivant le CSS.
Comme tout CSS, il peut contenir des requêtes média telles que `@media (prefers-color-scheme: dark)`.
Cela vous permettra de basculer la même icône entre les thèmes système clairs et sombres .

> (<https://web.dev/articles/building/an-adaptive-favicon?hl=fr>)

#### 3️⃣ Image PNG 180×180 pour appareils Apple

L'icône Apple Touch est une image que les appareils Apple utiliseront si vous ajoutez la page web comme raccourci vers l'écran d'accueil de votre iPhone ou iPad.
Votre page HTML doit contenir `<link rel="apple-touch-icon" href="apple-touch-icon.png">` la balise `<head>`.

Depuis iOS 8+, les **iPad** nécessitent une image d'une résolution de **180×180**.
D'autres appareils la réduisent, mais si la source est de qualité suffisante, cette réduction ne pénalisera pas l'utilisateur final.

> Remarque : une icône Apple Touch sera plus esthétique si vous ajouter un padding de 20px et ajoutez une couleur d'arrière-plan. Vous pouvez utiliser n'importe quel éditeur d'images pour cela.

#### 4️⃣ Manifeste d'application Web avec icônes PNG 192×192 et 512×512 pour appareils Android

Un manifeste d'application web est un fichier JSON contenant tous les détails permettant à un navigateur d'installer votre site web comme application système.
Ce format a été **développé par Google** via son initiative PWA .

Votre page HTML doit avoir une `<link rel="manifest" href="path.webmanifest">` balise avec un lien vers le fichier manifeste.
Le manifeste doit avoir un champ *icons* qui renvoie à trois icônes : 192×192, pour l'affichage sur l'écran d'accueil, une icône masquable 512×512 pour différents lanceurs Android, et une 512×512 qui sera utilisée comme écran de démarrage pendant le chargement de la PWA.

L'icône masquable (<https://maskable.app/>) doit être entourée d'un padding plus grand afin que le lanceur puisse la recadrer et l'adapter à son design.
La zone de sécurité est un cercle central de 409 × 409. Vous pouvez utiliser maskable.app pour vérifier votre icône.

```JSON
{
  "icons": [
    {
      "src": "/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/icon-mask.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    },
    {
      "src": "/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

**Avons-nous oublié quelqu'un ?**
Il existe bien sûr d'autres formats de favicon, certains assez obscurs.
Voyons donc comment notre configuration s'en sort.
Il est peut-être temps de dire adieu à certains formats moins populaires.

**Icône de tuile Windows**
Microsoft **Edge** prenait auparavant en charge un format d'icône spécial pour épingler des sites web dans le menu Démarrer. *Ce format n'est plus nécessaire pour les versions récentes de Windows.*

**Icône épinglée Safari**
Safari exigeait auparavant une icône monochrome SVG pour les onglets épinglé .
Cependant, depuis Safari 12, nous pouvons utiliser une icône de favicon standard pour les onglets épinglés.
Même apple.com ne l'utilise plus mask-icon .

`rel="raccourci"`
De nombreux tutoriels (désormais obsolètes) incluront un favicon.ico HTML comme celui-ci :

```html
<link rel="shortcut icon" href="/favicon.ico" sizes="32x32">
```

❌ Attention, ce shortcut n'est pas, et n'a jamais été, une relation de lien valide.
Lisez cet article remarquable de Mathias Bynens, publié il y a dix ans, qui explique pourquoi nous n'avons jamais eu besoin de raccourcis et pourquoi rel="icon"c'est tout à fait acceptable.

**Côte Opéra**
Par le passé, Opera Coast, un navigateur expérimental pour iOS, nécessitait une icône spéciale de 228 × 228.
*Ce navigateur a quitté l'App Store en 2017*, et je doute qu'il ait survécu aux multiples mises à jour iOS depuis.


#### Comment créer notre ensemble de favicons ultime

Voici comment créer notre ensemble de favicons minimalistes ultime en six étapes rapides.
Il vous suffit de commencer par un fichier SVG pour le logo que vous souhaitez utiliser.

##### Étape 1 : préparer le SVG

Assurez-vous que l'image SVG est carrée.
Ouvrez le fichier source dans votre visualiseur système et vérifiez la largeur et la hauteur de l'image.
Il est facile d'ajuster la taille du fichier SVG avec n'importe quel éditeur SVG.
Dans Inkscape , vous pouvez modifier la taille du document en sélectionnant Fichier → Propriétés du document, puis en centrant le logo avec Objet → Aligner et distribuer.

Enregistrez votre fichier au format icon.svg.
Adaptons maintenant notre SVG aux thèmes modernes.
Demandez à votre *graphiste* comment inverser les couleurs pour un thème sombre (pour les logos noir et blanc, remplacez simplement le noir par le blanc).

Ouvrez maintenant votre fichier SVG dans un éditeur de texte.
Recherchez un fichier dont le nom est sombre ou manquant *fill*.
Ajoutez une requête média CSS qui se déclenchera lors des changements de thème et adoptera fillles couleurs souhaitées :

```xml
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
+   <style>
+     @media (prefers-color-scheme: dark) {
+     .a { fill: #f0f0f0 }
+     }
+   </style>
-   <path fill="#0f0f0f" d="…" />
+   <path class="a" fill="#0f0f0f" d="…" />
  </svg>
```

> Vous pouvez également utiliser cette technique de requête multimédia avec les SVG pour ajouter des couleurs display P3 à large gamme à vos favicons.

##### Étape 2 : Créer un fichier ICO

Ouvrez votre fichier icon.svg dans un éditeur graphique.
Je recommande GIMP; il est gratuit et multiplateforme.

Accepter le rendu SVG au *format raster*.
Définir une largeur et une hauteur de 32 pixels.
Exporter le fichier en favicon.ico 32bpp, alpha 8 bits, sans paramètres de palette.

Si vous n'avez pas GIMP, vous pouvez installer Inkscape et ImageMagick et convertir SVG en ICO dans le *terminal* :

```cmd
inkscape ./icon.svg --export-width=32 --export-filename="./tmp.png"
# In Windows call
`magick convert ./tmp.png ./favicon.ico`
convert ./tmp.png ./favicon.ico
rm ./tmp.png
```

Réduisez l'image à 16×16 et vérifiez la visibilité de l'icône. Si elle est trop floue, il est préférable de demander à votre graphiste une version miniature personnalisée du logo.
Pour inclure une version 16×16 distincte d'une icône :

- Ouvrir favicon.icoavec l'icône 32×32.
- Créez un nouveau calque avec une taille de 16×16.
- Placez la version 16×16 d'une icône dans ce calque.
- Exportez le fichier.
- GIMP enregistrera chaque mise en page comme une version distincte de l'icône.

Ou vous pouvez faire la même chose dans **ImageMagick** en :

```cmd
convert ./icon-32.png ./icon-16.png ./favicon.ico
```

##### Étape 3 : créer des images PNG

Ouvrez à nouveau votre fichier SVG source dans un éditeur de graphiques raster(bitmap) et créez une image 512×512. Exportez-la au format icon-512.png.

Redimensionnez l'image à 192×192 et exportez-la au format icon-192.png.
Redimensionnez ensuite l'image à 140×140 et définissez la zone de travail à 180×180, puis exportez-la au format *apple-touch-icon.png*.

Ensuite, mettez-le à l'échelle 409×409, agrandissez le canvas à 512×512 et exportez-le au format *icon-mask.png*.
Vérifiez l'icône dans l' application maskable.app avec différents masques et ajustez la taille de l'icône si nécessaire.

Ou vous pouvez faire la même chose dans Inkscape :

```cmd
inkscape --export-type="png" --export-width=512 --export-filename="./icon-512.png" ./icon.svg
```

```cmd
inkscape --export-type="png" --export-width=192 --export-filename="./icon-192.png" ./icon.svg
```

##### Étape 4 : Optimiser les fichiers PNG et SVG

Le meilleur outil pour optimiser les fichiers SVG est **SVGO** . Pour l'utiliser, exécutez :

```cmd
npx svgo --multipass icon.svg
```

Squoosh est une excellente application Web pour optimiser les images raster(jpg, png,...) :

Ouvrez votre icon-512.png dans Squoosh.
Modifiez le paramètre Compresser sur OxiPNG.
Activer « Réduire la palette ».
Ensemble de 64 couleurs.
Comparez l'avant/après en déplaçant le curseur.
Si vous constatez une différence, augmentez le nombre de couleurs.
Enregistrez le fichier.
Répétez ces étapes pour icon-192.pnget apple-touch-icon.png.

##### Étape 5 : ajouter les icônes au code HTML

Vous devez ajouter des liens vers `favicon.ico` et vers `apple-touch-icon.png` dans votre HTML.

Pour le HTML statique :

```html
  <title>My website</title>
+ <link rel="icon" href="/favicon.ico" sizes="32x32">
+ <link rel="icon" href="/icon.svg" type="image/svg+xml">
+ <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Nous recommandons toutefois d'utiliser un bundler(parcel,...) pour générer des cache busters (en incluant le hachage du fichier dans le nom comme empreinte).

##### Étape 6 : Créer un manifeste Web

Pour le HTML statique, créez un fichier JSON nommé `manifest.webmanifest`:

```JSON
{
  "name": "My website",
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-mask.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

Liez-le dans votre HTML :

```html
  <title>My website</title>
+ <link rel="manifest" href="/manifest.webmanifest">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Happy coding 🫡
