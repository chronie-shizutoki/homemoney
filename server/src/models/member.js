const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW
    }
  })

  return Member
}