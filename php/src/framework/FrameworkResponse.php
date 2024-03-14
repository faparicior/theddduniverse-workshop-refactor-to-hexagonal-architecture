<?php
declare(strict_types=1);

namespace Demo\App\framework;

final readonly class FrameworkResponse
{
    public const STATUS_OK = 200;
    public const STATUS_CREATED = 201;
    public const STATUS_BAD_REQUEST = 400;

    public function __construct(private int $statusCode, private array $data)
    {
    }

    public function statusCode(): int
    {
        return $this->statusCode;
    }

    public function data(): array
    {
        return $this->data;
    }
}
