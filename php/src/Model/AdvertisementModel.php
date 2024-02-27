<?php
declare(strict_types=1);

namespace Demo\App\Model;

final class AdvertisementModel
{
    public function __construct(
        private readonly string $id,
        private string $description,
        private string $password,
    ){}

    public function id(): string
    {
        return $this->id;
    }

    public function description(): string
    {
        return $this->description;
    }

    public function password(): string
    {
        return $this->password;
    }

    public function changeDescription(string $description): void
    {
        $this->description = $description;
    }

    public function changePassword(string $password): void
    {
        $this->password = $password;
    }
}
