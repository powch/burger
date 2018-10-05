const express = require('express');
const burger = require('../models/burger');
const router = express.Router();


router.get('/', (req, res) => {
    burger.all(data => {
        res.render({burgers: data});
    });
});

router.post('/api/burgers/', (req, res) => {
    burger.create(
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        result => res.json({id: result.insertID})
    );
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`;

    burger.eat(
        { devoured: req.body.devoured },
        condition,
        result => {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;