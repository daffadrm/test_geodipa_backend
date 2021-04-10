const db = require("../db_config")
const { connect } = require("../db_config")

const readTr = (req,res) => {
    const sql = 'select * from transaction'
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}

const readTr2 = (req,res) => {
    const sql = 'select * from transaction where transaction_no='+req.params.transaction_no
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}

const insertTr = (req,res) => {
    const action = req.body.action
    const data = {transaction_no: req.body.transaction_no, transaction_date: req.body.transaction_date, id_product: req.body.id_product, price:req.body.price, qty:req.body.qty, subtotal:req.body.subtotal, created_by: req.body.created_by,created_date: req.body.created_date}
    const sql = "insert into transaction set ?"
    const query = db.query(sql,data,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const updateTr = (req,res) => {
    
    const sql = "update transaction set transaction_date='"+req.body.transaction_date+"',id_product='"+req.body.id_product+"',price='"+req.body.price+"',qty='"+req.body.qty+"',subtotal='"+req.body.subtotal+"',created_by='"+req.body.created_by+"',created_date='"+req.body.created_date+"'WHERE transaction_no="+req.params.id_transaction_no
    const query = db.query(sql,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const deleteTr = (req,res) => {
    
    const sql = "delete from transaction where transaction_no="+req.params.transaction_no+""
   const query = db.query(sql,(err,result)=> {
       if(err) throw err
        res.json(result)
    })

}
module.exports = {
    readTr,
    insertTr,
    updateTr,
    deleteTr,
    readTr2
  
    
}