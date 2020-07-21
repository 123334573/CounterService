/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('person', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		contact: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'contact'
		},
		identityCard: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'identity_card'
		},
		company: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'company'
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
		tableName: 'person'
	});
};
