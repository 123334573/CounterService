const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('counter', 'sa', '123456', {
    port: 1433, dialect: 'mssql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;