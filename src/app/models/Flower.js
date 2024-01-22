const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const Flower = new Schema({
  name: String,
  description: String,
  scent: String,
  tones: String,
  from: String,
  price: String,
  intro: String,
  img: String,
  slug: { type: String, slug: 'slug' },
})
//                              //tên colection trong DB
module.exports = mongoose.model('flowers', Flower)
