package framework.database

import java.sql.ResultSet

interface DatabaseConnection {
    fun connect(): SqliteConnection
    fun execute(sql: String)
    fun query(sql: String): ResultSet
}