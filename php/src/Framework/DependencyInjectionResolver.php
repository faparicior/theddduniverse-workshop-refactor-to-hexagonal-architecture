<?php
declare(strict_types=1);

namespace Demo\App\Framework;

use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementUseCase;
use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Infrastructure\Persistence\SqliteAdvertisementRepository;
use Demo\App\Advertisement\UI\Http\PublishAdvertisementController;
use Demo\App\Framework\Database\DatabaseConnection;
use Demo\App\Framework\Database\SqliteConnection;

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

    public function connection(): DatabaseConnection
    {
        return new SqliteConnection();
    }
}
