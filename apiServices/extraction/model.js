const extractionState = ['SOLICITADO', 'PENDIENTE', 'RECHAZADO', 'EJECUTADO', 'CANCELADO']

module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Extraction', {
    id_extraction: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM(extractionState),
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
    tableName: 'extraction',
    paranoid: true
  })
}
