const errorMessages = require('../../utils/errorMessages')
const depositDao = require('./dao')

function validateEmptyField(req)
{
  let errorMesage = '';

  if(req.body.province_code == '' || req.body.province_code == null) {
    errorMesage += 'Debe ingresar un código de provincia';
  }

  if(req.body.entity_code == '' || req.body.entity_code == null) {
    errorMesage += 'Debe ingresar un código de entidad';
  }

  if(req.body.branch_code == '' || req.body.branch_code == null) {
    errorMesage += 'Debe ingresar un código de sucursal';
  }

  if(req.body.extern_reference == '' || req.body.extern_reference == null) {
    errorMesage += 'Debe ingresar una referencia externa';
  }

  if(req.body.observation == '' || req.body.observation == null) {
    errorMesage += 'Debe ingresar una observación';
  }

  if(req.body.desglose == '' || req.body.desglose == null) {
    errorMesage += 'Debe ingresar una desglose';
  }

  if(req.body.currency == '' || req.body.currency == null) {
    errorMesage += 'Debe ingresar una currency';
  }
  
  if(req.body.amount == '' || req.body.amount == null) {
    errorMesage += 'Debe ingresar un importe';
  }

    return errorMesage;
}

function validateOnlyNumber(req)
{
  let errorMesage = '';

  if(isNaN(req.body.amount)) {
    errorMesage += 'El importe solo admite números';
  }
    return errorMesage;
}

function validateEmptyField(req)
{
  let errorMesage = '';

  if(req.body.province_code == '' || req.body.province_code == null) {
    errorMesage += 'Debe ingresar un código de provincia';
  }

  if(req.body.entity_code == '' || req.body.entity_code == null) {
    errorMesage += 'Debe ingresar un código de entidad';
  }

  if(req.body.branch_code == '' || req.body.branch_code == null) {
    errorMesage += 'Debe ingresar un código de sucursal';
  }

  if(req.body.extern_reference == '' || req.body.extern_reference == null) {
    errorMesage += 'Debe ingresar una referencia externa';
  }

  if(req.body.observation == '' || req.body.observation == null) {
    errorMesage += 'Debe ingresar una observación';
  }

  if(req.body.desglose == '' || req.body.desglose == null) {
    errorMesage += 'Debe ingresar una desglose';
  }

  if(req.body.currency == '' || req.body.currency == null) {
    errorMesage += 'Debe ingresar una currency';
  }
  
  if(req.body.amount == '' || req.body.amount == null) {
    errorMesage += 'Debe ingresar un importe';
  }

    return errorMesage;
}

function validateOnlyNumber(req)
{
  let errorMesage = '';

  if(isNaN(req.body.amount)) {
    errorMesage += 'El importe solo admite números';
  }
    return errorMesage;
}

module.exports = {
  async createDeposit (req, res, next) {
      try {  
           
        if(validateEmptyField(req)) 
        {
          res.status(401).json({ message: validateEmptyField(req)});
        }

        if(validateOnlyNumber(req)) 
        {
          res.status(401).json({ message: validateOnlyNumber(req)});
        }

       // await depositDao.create();

        res.status(200).json({ sageNumber: '2002115', message: "deposit created"});
      }
      catch (err) {
          res.status(500).json({message: err.message});
      }
  }
}
