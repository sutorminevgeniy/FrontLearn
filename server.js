'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const topics = require('./api/topics');

const app = express();

let nextId = 5;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/topics', (req, res) => {
    res.send(topics);
});

app.post('/api/topics', (req, res) => {
    const todo = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };

    topics.push(todo);

    res.send(todo);
});

app.put('/api/topics/:id', (req, res) => {
    const todo = topics.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.title = req.body.title || todo.title;

    res.json(todo);
});

app.patch('/api/topics/:id', (req, res) => {
    const todo = topics.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.completed = !todo.completed;

    res.json(todo);
});

app.delete('/api/topics/:id', (req, res) => {
    const index = topics.findIndex(todo => todo.id == req.params.id);
    
    if (index === -1) return res.sendStatus(404);

    topics.splice(index, 1);

    res.sendStatus(204);
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));