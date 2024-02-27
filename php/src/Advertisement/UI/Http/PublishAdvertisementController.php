<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\UI\Http;

use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementCommand;
use Demo\App\Advertisement\Application\Command\PublishAdvertisement\PublishAdvertisementUseCase;
use Demo\App\framework\FrameworkRequest;
use Demo\App\framework\FrameworkResponse;
use Ramsey\Uuid\Uuid;

final class PublishAdvertisementController
{
    public function __construct(private PublishAdvertisementUseCase $useCase)
    {
    }

    public function request(FrameworkRequest $request): FrameworkResponse
    {
        $command = new PublishAdvertisementCommand(
            Uuid::uuid4()->toString(),
            ($request->data())['description'],
            ($request->data())['password'],
        );

        $this->useCase->execute($command);

        return new FrameworkResponse([]);
    }
}