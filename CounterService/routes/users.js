'use strict';
var express = require('express');
var router = express.Router();
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../tools/sequelize');
const UserInfo = require('../models/user_info');
const Result = require('../tools/result');
const { createToken } = require('../tools/token');

const userInfo = UserInfo(sequelize, DataTypes);

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/login', (req, res) => {
    var data = req.body;
    userInfo.findOne({
        where: { username: data.username, password: data.password }
    }).then((re) => {
        if (re) {
            res.json(Result.success(createToken(data.username)));
        }
        else {
            res.json(Result.error("用户或密码错误!"));
        }
    }).catch((err) => {
        res.json(Result.error(err));
    });
});

module.exports = router;
