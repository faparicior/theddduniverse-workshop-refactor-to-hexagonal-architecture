<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\Domain;

use Demo\App\Advertisement\Domain\Model\Advertisement;

interface AdvertisementRepository
{
    public function save(Advertisement $advertisement): void;
}