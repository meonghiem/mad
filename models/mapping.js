'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Mapping extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Mapping.init({
        schemaName: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Mapping',
    });

    // await Mapping.sync()
    return Mapping;
};
