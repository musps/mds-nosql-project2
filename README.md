# Search Engine

# Comment l'utiliser ?

```
# Première commande pour installer les librairies.
npm installl

# Deuxième commande pour démarrer le serveur.
npm start

# Le serveur tourne sur le port 3000

http://127.0.0.1:3000/

```

# Liste des routes

| route | usage |
| --- | --- |
| / | Par défaut.
| /article/ | Liste de tous les articles.
| /article/add | Page d'ajout d'un article.
| /article/api/list | Liste de tous les article au format JSON.
| /website/ | Liste de tous les website.
| /website/add | Page d'ajout d'un website.
| /website/api/list | Liste de tous les website au format JSON.
| /* | Toutes les autres routes afficheront une page 404.

# Librairies utilisées 

| nom | usage |
| --- | --- |
| express
| mongoose
| mongoose-search-plugin
| morgan
| pug
| serve-favicon
| cookie-parser
| bootstrap
| body-parser
| debug

# Structure du projet

Tout les fichiers du projet sont contenu dans le dossier ```src```

### Assets

Il contient tous les fichiers js, css, image requis au design.

### Components

Chaque partie est découpé sous forme d'un composant.
Un componsant contient son model, ses actions et ses routes.

### Routes

Il s'agit d'un fichier unique regroupant toutes les routes des différents composants.

### Views

Ce dossier contient les différents fichiers pugs.