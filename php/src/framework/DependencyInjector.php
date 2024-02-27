<?php
declare(strict_types=1);

namespace Demo\App\framework;

use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementUseCase;
use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Infrastructure\Persistence\SqliteAdvertisementRepository;
use Demo\App\Advertisement\UI\Http\AdvertisementController;
use Demo\App\Advertisement\UI\Http\PublishAdvertisementController;

class DependencyInjector
{
    public static function getPublishAdvertisementController(): PublishAdvertisementController
    {
        return new PublishAdvertisementController(
            new PublishAdvertisementUseCase(self::getAdvertisementRepository())
        );
    }

    public static function getAdvertisementRepository(): AdvertisementRepository
    {
        return new SqliteAdvertisementRepository(self::getSqliteConnection());
    }
    public static function getSqliteConnection(): SqliteConnection
    {
        return new SqliteConnection();
    }
}
