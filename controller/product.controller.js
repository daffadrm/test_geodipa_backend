const db = require("../db_config")
const { connect } = require("../db_config")


const readProduct = (req,res) => {
    const sql = 'select * from product'
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}
const readProduct2 = (req,res) => {
    const sql = 'select * from product where id_product='+req.params.id_product
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}
const insertProduct = (req,res) => {
    const action = req.body.action
    const data = {id_product: req.body.id_product, product_name: req.body.product_name, price: req.body.price, stock:req.body.stock}
    const sql = "insert into product set ?"
    const query = db.query(sql,data,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const updateProduct = (req,res) => {
    
    const sql = "update product set product_name='"+req.body.product_name+"',price='"+req.body.price+"',stock='"+req.body.stock+"'WHERE id_product="+req.params.id_product
    const query = db.query(sql,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const deleteProduct = (req,res) => {
    
    const sql = "delete from product where id_product="+req.params.id_product+""
    const query = db.query(sql,(err,result)=> {
        if(err) throw err
        res.json(result)
    })

}
module.exports = {
    readProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
    readProduct2
}