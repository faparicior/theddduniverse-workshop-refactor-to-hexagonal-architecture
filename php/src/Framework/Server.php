<?php
declare(strict_types=1);

namespace Demo\App\Framework;

final class Server
{
    public function __construct(private DependencyInjectionResolver $resolver)
    {
    }

    public function route(FrameworkRequest $request): FrameworkResponse
    {
        return match ($request->method()) {
            FrameworkRequest::METHOD_GET => $this->get($request),
            FrameworkRequest::METHOD_POST => $this->post($request),
            default => $this->notFound($request),
        };
    }

    public function get(FrameworkRequest $request): FrameworkResponse
    {
        return $this->notFound($request);
    }

    public function post(FrameworkRequest $request): FrameworkResponse
    {
        return match ($request->path()) {
            'advertisement' => $this->resolver->publishAdvertisementController()->request($request),
            default => $this->notFound($request),
        };
    }
    public function notFound(FrameworkRequest $request): FrameworkResponse
    {
        return new FrameworkResponse(FrameworkResponse::STATUS_NOT_FOUND, []);
    }
}
