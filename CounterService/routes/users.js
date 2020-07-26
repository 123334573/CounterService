'use strict';
var express = require('express');
var router = express.Router();
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../tools/sequelize');
const UserInfo = require('../models/user_info');

const userInfo = UserInfo(sequelize, DataTypes);

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/login', (req, res) => {
    userInfo.findOne({
        where: { username: 'admin', password: '123456' }
    }).then((re) => {
        res.json({ code: 200, data: re });
    }).catch((err) => {
        res.json({
            code: '500',
            data: err
        });
    });
});

module.exports = router;
