const path = require('path');

module.exports = {
  entry: './server.js', // Chemin de votre fichier source principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie du bundle
    filename: 'bundle.js', // Nom du fichier de sortie
  },
  // Ajoutez d'autres règles pour le traitement des fichiers si nécessaire
};