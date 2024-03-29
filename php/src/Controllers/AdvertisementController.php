<?php
declare(strict_types=1);

namespace Demo\App\Controllers;

use Demo\App\framework\database\SqliteConnection;
use Demo\App\framework\FrameworkRequest;
use Demo\App\framework\FrameworkResponse;
use Demo\App\Model\AdvertisementModel;
use Ramsey\Uuid\Uuid;

final readonly class AdvertisementController
{
    public function __construct(private SqliteConnection $connection)
    {
    }

    public function addAdvertisement(FrameworkRequest $request): FrameworkResponse
    {
        $advertisement = new AdvertisementModel(
            ($request->content())['id'],
            ($request->content())['description'],
            ($request->content())['password'],
        );

        $pdo = $this->connection->connect();

        $pdo->exec(sprintf("INSERT INTO advertisements (id, description, password) VALUES ('%s', '%s', '%s');",
                $advertisement->id(),
                $advertisement->description(),
                md5($advertisement->password()),
            )
        );

        return new FrameworkResponse(
            FrameworkResponse::STATUS_CREATED,
            []
        );
    }
}
