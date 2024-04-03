<?php
declare(strict_types=1);

namespace Demo\App\Framework\Database;

use PDO;

interface DatabaseConnection
{
    public function execute(string $sql): void;
    public function query(string $sql): array;
}