import mysql from 'mysql2'

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.getConnection((error)=>{
    if(error){
        console.log('The connection mistake is: '+error)
        return
    } console.log('You are connected to database')}
)

export default connection;