<?php
declare(strict_types=1);

namespace Demo\App\Framework;

use Demo\App\Controllers\AdvertisementController;
use Demo\App\Framework\Database\DatabaseConnection;
use Demo\App\Framework\Database\SqliteConnection;

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
