const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Reviews', 
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false
            },
            rating: {
                type: DataTypes.ENUM("1", "2", "3", "4", "5"),
                allowNull: false,
            }
        },
        { timestamps: false, freezeTableName: true }
    );
}