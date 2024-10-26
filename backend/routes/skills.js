/*
** EPITECH PROJECT, 2024
** esteban-marques-web-cv
** File description:
** skills
*/

const express = require('express');
const db = require('./../config/db');
const e = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM Skills WHERE typeskill_id = ? ORDER BY name';

    db.all(query, [req.params.id], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error: ' + err.message });
        return res.status(200).json({ rows });
    });
});

router.get('/', (req, res) => {
    const query = 'SELECT * FROM TypeSkills';

    db.all(query, [], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error: ' + err.message });
        return res.status(200).json({ rows });
    });
});


module.exports = router;