<?php
declare(strict_types=1);

namespace Demo\App\Framework;

final readonly class FrameworkResponse
{
    public const int STATUS_OK = 200;
    public const int STATUS_CREATED = 201;
    public const int STATUS_BAD_REQUEST = 400;
    public const int STATUS_NOT_FOUND = 404;

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
