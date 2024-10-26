/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** index
*/


const cors = require('cors');
const express = require('express');

const modules = require('./routes/modules');
const projects = require('./routes/projects');
const skills = require('./routes/skills');

const app = express();
const port = process.env.PORT || 5000;



app.use(cors())
app.use(express.json());
app.use('/modules', modules);
app.use('/projects', projects);
app.use('/skills', skills);

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to the Esteban Marques cv-web server");
});

app.listen(port, (error) =>{
    if(!error)
        console.log("Local:\t\thttp://localhost:" + port);
    else 
        console.log("Error occurred, server can't start", error);
    }
);