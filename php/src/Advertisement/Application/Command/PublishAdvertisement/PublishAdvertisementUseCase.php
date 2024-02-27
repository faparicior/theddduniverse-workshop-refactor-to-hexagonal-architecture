<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\Application\Command\PublishAdvertisement;

use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Domain\Model\Advertisement;

final class PublishAdvertisementUseCase
{
    public function __construct(private AdvertisementRepository $advertisementRepository)
    {
    }

    public function execute(PublishAdvertisementCommand $command): void
    {
        $advertisement = new Advertisement(
            $command->id,
            $command->description,
            $command->password,
        );

        $this->advertisementRepository->save($advertisement);
    }
}