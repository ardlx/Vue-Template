const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const bodyParser = require('body-parser')
const cors = require('cors')
const mssql = require('mssql')
const mysql = require('mysql')

const moment = require('moment')

dotenv.config()
router.use(cors())

// router.use(bodyParser.urlencoded({
//     limit: '10mb',
//     extended: false
// }))

// router.use(bodyParser.json({
//     limit: '10mb',
//     extended: true
// }))

router.use(express.json({
    limit: '200mb'
}))

router.use(express.urlencoded({
    limit: '200mb',
    extended: true
}))

// ================================================================================ //
// ================================== connection ================================== //
// ================================================================================ //

// ==================== MSSQL ==================== //
const MSSQL_CONNECTION = {
    user    : process.env.VUE_APP_MSSQL_USERNAME,
    password: process.env.VUE_APP_MSSQL_PASSWORD,
    server  : process.env.VUE_APP_MSSQL_SERVER,
    database: process.env.VUE_APP_MSSQL_DATABASE,
    options : {
        abortTransactionOnError: true,
        enableArithAbort: true,
        encrypt: false,
    },
};

// ==================== MYSQL ==================== //
const MYSQL_CONNECTION = mysql.createConnection({
    host     : process.env.VUE_APP_MYSQL_LOCALHOST,
    user     : process.env.VUE_APP_MYSQL_ROOT,
    password : process.env.VUE_APP_MYSQL_PASSWORD,
    database : process.env.VUE_APP_MYSQL_DATABASE
})

// ================================================================================ //
// ==================================== routes ==================================== //
// ================================================================================ //
router.get('/test', (req,res) => {
    res.send('Working Controller');
})

// ==================== MSSQL ==================== //
router.get('/MSSQLQuery', (req,res) => {
    let sql = `SELECT * FROM TABLE`

    mssql.connect(MSSQL_CONNECTION, (error) => {
        if (error) {
            console.log('MSSQLQuery Error', error);
        }
        var request = new mssql.Request();
        request.query(sql, (error, recordset) => {
            if (error){ 
                console.log('MSSQLQuery Query Error', error)
            } else{
                res.send(recordset.recordsets[0])
            }
        })
    })
    // mssql.close()
})

// ==================== MYSQL ==================== //
router.get('/MYSQLQuery', (req,res) => {
    let sql = `SELECT * FROM TABLE`

    MYSQL_CONNECTION.query(sql, (error, results, fields) => {
        if(!error){
            res.json(results)
        }
        else{
            res.json({message: error})
        }
    });
})

module.exports = router;