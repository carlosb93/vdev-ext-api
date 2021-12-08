const DepositDAO = {
  create (deposit) {
    const newDeposit = Deposit.build(deposit)
    return new Promise((resolve, reject) => {
      return resolve('Se guardaron correctamente los datos');
    })
  }
}

module.exports = DepositDAO
