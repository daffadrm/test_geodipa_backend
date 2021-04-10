const db = require("../db_config")
const { connect } = require("../db_config")


const readUser = (req,res) => {
    const sql = 'select * from user'
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}
const readUser2 = (req,res) => {
    const sql = 'select * from user where id_user='+req.params.id_user
    const query = db.query(sql, (err, result)=> {
        if(err)throw err
        res.json(result)
    })
}
const insertUser = (req,res) => {
    const action = req.body.action
    const data = {id_user: req.body.id_user, username: req.body.username, password: req.body.password, fullname:req.body.fullname, address:req.body.address, gender:req.body.gender, bird_date: req.body.bird_date}
    const sql = "insert into user set ?"
    const query = db.query(sql,data,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const updateUser = (req,res) => {
    
    const sql = "update user set username='"+req.body.username+"',password='"+req.body.password+"',fullname='"+req.body.fullname+"',address='"+req.body.address+"',gender='"+req.body.gender+"',bird_date='"+req.body.bird_date+"'WHERE id_user="+req.params.id_user
    const query = db.query(sql,(err,result)=> {
        if(err) throw err
        res.json(result)
    })
    
}
const deleteUser = (req,res) => {
    
    const sql = "delete from user where id_user="+req.params.id_user+""
   const query = db.query(sql,(err,result)=> {
       if(err) throw err
        res.json(result)
    })

}
module.exports = {
    readUser,
    readUser2,
    insertUser,
    updateUser,
    deleteUser
    
}