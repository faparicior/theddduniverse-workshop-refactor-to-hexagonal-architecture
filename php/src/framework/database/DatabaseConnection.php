<?php
declare(strict_types=1);

namespace Demo\App\framework\database;

use PDO;

interface DatabaseConnection
{
    public function connect(): PDO;
}