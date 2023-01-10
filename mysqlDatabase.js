
import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()


//CONNECT TO THE DATABASE
const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT || 3306,
})
.promise()


export async function getNotes(){
    let query =`
    SELECT * 
    FROM notes`

    const [rows] = await pool.query(query)
    return rows
}


export async function addNote(title, content) {
const query = `
INSERT INTO notes (title, contents)
VALUES (?,?)
`
await pool.query(query, [title, content])

}


export async function deleteNote(id) {
    const [result] = await pool.query(`
    DELETE FROM notes
    WHERE id = ?
    `, [id])
    return result
}
