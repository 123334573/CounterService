'use strict';
const express = require('express');
const router = express.Router();
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../tools/sequelize');
const Menu = require('../models/menu');
const Result = require('../tools/result');

const menu = Menu(sequelize, DataTypes);

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

function buildTree(menus) {
    let object = {};
    let nodes = [];
    menus.forEach(value => object[value.id] = value);
    for (let i = menus.length - 1; i >= 0; i--) {
        let node = menus[i];
        let id = node.id;
        let parentId = node.parent;
        let parent = object[parentId];
        if (parent) {
            if (!parent['children']) {
                parent['children'] = [];
            }
            parent['children'].push(object[id]);
        }
        else {
            nodes.push(object[id]);
        }
    }
    return nodes;
}

router.post('/list', (req, res) => {
    menu.findAll({
        order: [
            ['parent'], ['sort']
        ]
    }).then((re) => {
        var result = buildTree(re);
        res.json(Result.success(result));
    }).catch((err) => {
        res.json(Result.error(err));
    });
});



module.exports = router;