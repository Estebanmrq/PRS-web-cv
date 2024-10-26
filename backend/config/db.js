/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** db
*/

const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./database/cv_web.db', (err) => {
    if (err)
        console.error(err.message);
    else
        console.log('Successfully connected to the cv_web database.');
});

module.exports = db;