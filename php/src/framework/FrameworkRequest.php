<?php
declare(strict_types=1);

namespace Demo\App\framework;

final readonly class FrameworkRequest
{
    public const string METHOD_GET = 'GET';
    public const string METHOD_POST = 'POST';

    public function __construct(private string $method, private string $path, private array $content)
    {
    }

    public function method(): string
    {
        return $this->method;
    }

    public function path(): string
    {
        return $this->path;
    }

    public function content(): array
    {
        return $this->content;
    }
}
