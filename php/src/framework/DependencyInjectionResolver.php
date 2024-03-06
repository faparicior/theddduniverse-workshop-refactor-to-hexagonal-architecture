<?php
declare(strict_types=1);

namespace Demo\App\framework;

use Demo\App\Controllers\AdvertisementController;
use Demo\App\framework\database\DatabaseConnection;
use Demo\App\framework\database\SqliteConnection;

class DependencyInjectionResolver
{
    public function advertisementController(): AdvertisementController
    {
        return new AdvertisementController(self::connection());
    }

    public function connection(): DatabaseConnection
    {
        return new SqliteConnection();
    }
}
