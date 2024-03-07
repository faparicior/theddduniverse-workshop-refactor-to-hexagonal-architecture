<?php
declare(strict_types=1);

namespace Demo\App\framework;

use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementUseCase;
use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Infrastructure\Persistence\SqliteAdvertisementRepository;
use Demo\App\Advertisement\UI\Http\PublishAdvertisementController;
use Demo\App\Controllers\AdvertisementController;
use Demo\App\framework\database\DatabaseConnection;
use Demo\App\framework\database\SqliteConnection;

class DependencyInjectionResolver
{
    public function publishAdvertisementController(): PublishAdvertisementController
    {
        return new PublishAdvertisementController($this->publishAdvertisementUseCase());
    }

    public function publishAdvertisementUseCase(): PublishAdvertisementUseCase
    {
        return new PublishAdvertisementUseCase($this->advertisementRepository());
    }

    public function advertisementRepository(): AdvertisementRepository
    {
        return new SqliteAdvertisementRepository(self::connection());
    }

    public function advertisementController(): AdvertisementController
    {
        return new AdvertisementController(self::connection());
    }

    public function connection(): DatabaseConnection
    {
        return new SqliteConnection();
    }
}
