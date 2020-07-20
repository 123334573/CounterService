/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('menu', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'code'
        },
        parent: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'parent'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'url'
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'icon'
        },
        sort: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'sort'
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
        tableName: 'menu',
        timestamps: false
    });
};
