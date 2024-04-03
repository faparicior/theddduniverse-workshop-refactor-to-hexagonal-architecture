<?php
declare(strict_types=1);

namespace Demo\App\Framework\Database;

use PDO;

final class SqliteConnection implements DatabaseConnection
{
    private const string PATH_TO_SQLITE_FILE = 'src/db/advertisements.sqlite';
    private const string PATH_TO_SQLITE_MIGRATION = 'src/db/migrations/migration.sql';

    private ?PDO $dbConnection = null;

    public function execute(string $sql): void
    {
        $this->connect()->exec($sql);
    }

    public function query(string $sql): array
    {
        return $this->connect()->query($sql)->fetchAll();
    }

    private function connect(): PDO
    {
        $createDatabase = false;

        $path = self::PATH_TO_SQLITE_FILE;

        if (!file_exists($path)) {
            $createDatabase = true;
        }

        if ($this->dbConnection === null) {
            $this->dbConnection = new PDO("sqlite:" . self::PATH_TO_SQLITE_FILE);
        }

        if ($createDatabase) {
            $migration = file_get_contents(self::PATH_TO_SQLITE_MIGRATION);
            $this->dbConnection->exec($migration);
        }

        return $this->dbConnection;
    }
}
