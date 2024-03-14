<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\UI\Http;

use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementCommand;
use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementUseCase;
use Demo\App\framework\FrameworkRequest;
use Demo\App\framework\FrameworkResponse;

final class PublishAdvertisementController
{
    public function __construct(private PublishAdvertisementUseCase $useCase)
    {
    }

    public function request(FrameworkRequest $request): FrameworkResponse
    {
        $command = new PublishAdvertisementCommand(
            ($request->content())['id'],
            ($request->content())['description'],
            ($request->content())['password'],
        );

        $this->useCase->execute($command);

        return new FrameworkResponse(
            FrameworkResponse::STATUS_CREATED,
            []
        );
    }
}
