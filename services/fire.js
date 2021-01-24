const admin = require('firebase-admin');
const serviceAccount = require('../env/smarttrash-980a7-firebase-adminsdk-56myd-9afd5731a1.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://smarttrash-980a7.firebaseio.com'
});

module.exports = admin;