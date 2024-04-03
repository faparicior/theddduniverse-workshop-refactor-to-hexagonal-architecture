import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import * as fs from "fs";
import {DatabaseConnection} from "./DatabaseConnection";

export default class SqliteConnection implements DatabaseConnection{
    path_to_sqlite_file = 'src/db/advertisements.sqlite'
    path_to_sqlite_migration = 'src/db/migrations/migration.sql'

    async connect(): Promise<Database> {
        let createDatabase = false

        if (!fs.existsSync(this.path_to_sqlite_file)) {
            createDatabase = true
        }

        const db = await open({
            filename: this.path_to_sqlite_file,
            driver: sqlite3.Database
        })

        if (createDatabase) this.createDatabase(db)

        return db
    }

    private createDatabase(db: Database): void {
        console.log('Migrating database')
        db.exec(fs.readFileSync(this.path_to_sqlite_migration).toString());
    }
}
