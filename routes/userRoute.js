const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('Hello Users!');
});

route.get('/user', (req, res) => {
    res.send({
        name: 'John Doe',
        age: 25
    });
});

module.exports = route;