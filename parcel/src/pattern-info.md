Le Guide de l'Attribut `pattern` en HTML5

# Pattern=" *[regex]* "

L'attribut `pattern` est un attribut HTML5 permettant de définir une expression régulière (regex) pour les champs de formulaire.

Cette fonctionnalité permet aux développeurs de contrôler le format des données saisies par l'utilisateur, ce qui peut améliorer la validation et la sécurité du formulaire.

## Utilisation de l'Attribut `pattern`

L'attribut `pattern` est utilisé dans les éléments HTML suivants :

- `input` (type="text", "email", "tel", etc.)
- `textarea`
- `select`

Voici le format de l'attribut `pattern` :

```html
<input type="text" pattern="[regex]" />
```

Remplacez `[regex]` par votre expression régulière.

### Exemples d'Utilisation

- **Format de texte** : Pour contrôler le format du texte saisie, utilisez l'expression régulière suivante :

```html
<input type="text" pattern="[a-zA-Z ]*" />
```

Ce pattern accepte uniquement les lettres et les espaces.

- **Format d'email** : Pour valider un email, utilisez l'expression régulière suivante :

```html
<input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
```

Ce pattern accepte les adresses e-mail standard.

- **Format de téléphone** : Pour valider un numéro de téléphone, utilisez l'expression régulière suivante :

```html
<input type="tel" pattern="[0-9\s\-()]+" ] />
```

Ce pattern accepte les numéros de téléphone avec des espaces, des tirets et des parenthèses.

### Limitations

1. **Compatibilité** : L'attribut `pattern` n'est pas compatible avec les anciens navigateurs (Internet Explorer < 11).
2. **Validation** : Le pattern est vérifié au moment où l'utilisateur soumet le formulaire. **Si le format est incorrect, le formulaire ne sera pas soumis**.
3. **Erreur** : Si un utilisateur entre une valeur qui ne respecte pas le pattern, un message d'erreur apparaitra pour indiquer que la saisie est invalide.

> En résumé, l'attribut `pattern` en HTML5 est un outil puissant pour contrôler les formats de données saisies par les utilisateurs. Il offre une meilleure sécurité et validation des formulaires.

