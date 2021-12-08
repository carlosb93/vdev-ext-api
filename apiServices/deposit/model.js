const depositState = ['SOLICITADO', 'PENDIENTE', 'RECHAZADO', 'EJECUTADO']

module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Deposit', {
    id_deposit: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    evidence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM(depositState),
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING
    },
    usd_amount: {
      type: Sequelize.FLOAT(20),
      allowNull: false
    },
    crypto_amount: {
      type: Sequelize.FLOAT(20),
      allowNull: true
    }
  },
  {
    tableName: 'deposit',
    paranoid: true
  })
}
