const Product = require('../../models/Product')

module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.find().lean()
    res.render('products/all', { products })
  }

  static createProduct(req, res) {
    res.render('products/create')
  }

  static async saveProduct(req, res) {
    const { name, image, price, description } = req.body

    const product = new Product({ name, image, price, description })

    await product.save()

    res.redirect('/')
  }

  static async getProduct(req, res) {
    const id = req.params.id

    const product = await Product.findById(id).lean()

    res.render('products/product', { product })
  }

  static async editProduct(req, res) {
    const id = req.params.id

    const product = await Product.findById(id).lean()

    res.render('products/edit', { product })
  }

  static async removeProduct(req, res) {
    const id = req.params.id

    await Product.findByIdAndDelete(id)

    res.redirect('/')
  }

  static async updateProduct(req, res) {
    const id = req.params.id

    const { name, image, price, description } = req.body

    const product = { name, image, price, description }

    await Product.updateOne({ _id: id }, product)

    res.redirect('/')
  }
}
