/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** modules
*/


const express = require('express');
const db = require('./../config/db');
const router = express.Router();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM Modules'

    db.all(query, [], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error: ' + err.message });
        return res.status(200).json({ rows });
    });
});

module.exports = router;

