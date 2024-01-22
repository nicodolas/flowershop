const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/nico_flower_shop_dev')
    console.log('Kết nối thành công DB')
  } catch (error) {
    console.log('Kết nối không thành công DB')
  }
}
module.exports = { connect }
