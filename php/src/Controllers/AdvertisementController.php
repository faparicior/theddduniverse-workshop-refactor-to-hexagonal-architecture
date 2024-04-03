<?php
declare(strict_types=1);

namespace Demo\App\Controllers;

use Demo\App\Framework\Database\SqliteConnection;
use Demo\App\Framework\FrameworkRequest;
use Demo\App\Framework\FrameworkResponse;
use Demo\App\Model\AdvertisementModel;

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

        $dbConnection = $this->connection->connect();

        $dbConnection->exec(sprintf("INSERT INTO advertisements (id, description, password) VALUES ('%s', '%s', '%s');",
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
