const express = require('express');
const router = express.Router()
const {readTr,insertTr, updateTr, deleteTr, readTr2} = require('../controller/transaction.controller')


router.get ('/', readTr)
router.get ('/:transaction_no', readTr2)
router.post ('/', insertTr)
router.put ('/:transaction_no', updateTr)
router.delete ('/:transaction_no', deleteTr)

module.exports = router