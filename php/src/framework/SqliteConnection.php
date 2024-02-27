<?php

namespace Demo\App\framework;

use PDO;

final class SqliteConnection
{
    private const PATH_TO_SQLITE_FILE = 'src/db/advertisements.sqlite';
    private const PATH_TO_SQLITE_MIGRATION = 'src/db/migrations/migration.sql';

    private ?PDO $pdo = null;

    /**
     * return in instance of the PDO object that connects to the SQLite database
     * @return PDO
     */
    public function connect(): PDO
    {
        $migrate = false;

        $path = self::PATH_TO_SQLITE_FILE;

        if (!file_exists($path)) {
            $migrate = true;
        }

        if ($this->pdo === null) {
            $this->pdo = new PDO("sqlite:" . self::PATH_TO_SQLITE_FILE);
        }

        if ($migrate) {
            $migration = file_get_contents(self::PATH_TO_SQLITE_MIGRATION);
            $this->pdo->exec($migration);
        }

        return $this->pdo;
    }
}
