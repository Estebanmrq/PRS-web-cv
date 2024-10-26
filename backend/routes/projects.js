/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** projects
*/

const express = require('express');
const db = require('./../config/db');
const router = express.Router();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM Projects'

    db.all(query, [], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error: ' + err.message });
        return res.status(200).json({ rows });
    });
});

router.get('/:module_id', (req, res) => {
    const query = 'SELECT Projects.*, TargetProjects.name AS target_name FROM  Projects JOIN TargetProjects ON Projects.target_id = TargetProjects.id WHERE Projects.module_id = ?'

    db.all(query, [req.params.module_id], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error: ' + err.message });
        return res.status(200).json({ rows });
    });
});


router.get('/tech/:project_id', (req, res) => {
    const query = 'SELECT t.name FROM Skills t JOIN TechnoProjects tp ON t.id = tp.id_techno WHERE tp.id_project = ?'

    db.all(query, [req.params.project_id], (err, rows) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error : ' + err.message });
        return res.status(200).json({ rows });
    });
});

module.exports = router;