
import { Database } from 'sqlite'

import { DatabaseConnection } from './DatabaseConnection';

export default class SqliteConnection implements DatabaseConnection {

    private connection: Database

    constructor(connection: Database) {
        this.connection = connection
    }

    async execute(sql: string, data: unknown[]): Promise<void> {
        try {
            await this.connection.run(sql, data);
        } catch (error) {
            console.error(error)
        }
    }

    async query(sql: string): Promise<unknown[]> {
        return await this.connection.all(sql);
    }
}
