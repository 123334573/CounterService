/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userInfo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        createUser: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'create_user'
        },
        createDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'create_date'
        },
        modifyUser: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'modify_user'
        },
        modifyDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            field: 'modify_date'
        }
    }, {
        tableName: 'user_info',
        timestamps: false
    });
};
