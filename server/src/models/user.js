export default (Sequelize, DataTypes) => {
  return Sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    balance: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 0,
    },

    total_sales: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 0,
    },
  })
}
