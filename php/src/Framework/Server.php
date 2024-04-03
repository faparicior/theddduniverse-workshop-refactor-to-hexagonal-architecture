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
        switch ($request->method()) {
            case FrameworkRequest::METHOD_GET:
                return $this->get($request);
                break;
            case FrameworkRequest::METHOD_POST:
                return $this->post($request);
                break;
            default:
                return $this->notFound($request);
                break;
        }
    }

    public function get(FrameworkRequest $request): FrameworkResponse
    {
        return $this->notFound($request);
    }

    public function post(FrameworkRequest $request): FrameworkResponse
    {
        switch ($request->path()) {
            case 'advertisement':
                return $this->resolver->publishAdvertisementController()->request($request);
                break;
            default:
                return $this->notFound($request);
        }
    }
    public function notFound(FrameworkRequest $request): FrameworkResponse
    {
        return new FrameworkResponse(['404'],);
    }
}
