<?php
declare(strict_types=1);

namespace Demo\App\Framework\Database;

use PDO;

interface DatabaseConnection
{
    public function connect(): PDO;
}