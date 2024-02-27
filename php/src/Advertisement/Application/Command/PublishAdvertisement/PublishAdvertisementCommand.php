<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\Application\Command\PublishAdvertisement;

final readonly class PublishAdvertisementCommand
{
    public function __construct(
        public string $id,
        public string $description,
        public string $password,
    ){}
}
