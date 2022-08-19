const mongoose = require('mongoose')
;(async () =>
  (await mongoose.connect('mongodb://localhost:27017/mongoose')) &&
  console.log('Conectou ao mongoose'))().catch((err) => console.log(err))

module.exports = mongoose
