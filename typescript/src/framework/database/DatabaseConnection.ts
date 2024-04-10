export interface DatabaseConnection {
    execute(sql: string, data: unknown[]): Promise<void>
    query(sql: string): Promise<unknown[]>
}
