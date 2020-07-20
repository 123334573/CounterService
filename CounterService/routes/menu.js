'use strict';
const express = require('express');
const router = express.Router();
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../tools/sequelize');
const Menu = require('../models/menu');

const menu = Menu(sequelize, DataTypes);

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

function buildTree(menus) {
    for (let i = 0; i < menus.length; i++) {
        menus[i]
    }
    var children = menus.filter((a => a.parent == node.id));
}

router.get('/list', (req, res) => {
    const menus = menu.findAll({
        order: [
            ['parent'], ['sort']
        ]
    }).then((re) => {
        buildTree(re);
        res.json({ code: 200, data: re });
    }).catch((err) => {
        res.json({
            code: '500',
            data: err
        });
    });
});



module.exports = router;