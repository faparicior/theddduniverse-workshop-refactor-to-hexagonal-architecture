import * as fs from "fs";
import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import SqliteConnection from "./SqliteConnection";

export class SqliteConnectionFactory {

  static path_to_sqlite_file = 'src/db/advertisements.sqlite'
  static path_to_sqlite_migration = 'src/db/migrations/migration.sql'

  static async connect(): Promise<Database> {
    let migrate = false

    if (!fs.existsSync(this.path_to_sqlite_file)) {
      migrate = true
    }

    const connection = await open({
      filename: this.path_to_sqlite_file,
      driver: sqlite3.Database
    })

    if (migrate) this.migrate(connection)

    return connection
  }

  static migrate(db: Database): void {
    console.log('Migrating database')
    db.exec(fs.readFileSync(this.path_to_sqlite_migration).toString());
  }

  static async createClient(): Promise<SqliteConnection> {
    const client = await this.connect();

    return new SqliteConnection(client);
  }
}
