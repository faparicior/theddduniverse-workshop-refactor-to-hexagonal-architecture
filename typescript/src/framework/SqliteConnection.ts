import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import * as fs from "fs";

export default class SqliteConnection {
    path_to_sqlite_file = 'src/db/advertisements.sqlite'
    path_to_sqlite_migration = 'src/db/migrations/migration.sql'

    async connect(): Promise<Database> {
        let migrate = false

        if (!fs.existsSync(this.path_to_sqlite_file)) {
            migrate = true
        }

        const db = await open({
            filename: this.path_to_sqlite_file,
            driver: sqlite3.Database
        })

        if (migrate) this.migrate(db)

        return db
    }

    private migrate(db: Database): void {
        console.log('Migrating database')
        db.exec(fs.readFileSync(this.path_to_sqlite_migration).toString());
    }
}
