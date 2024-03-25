<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\UI\Http;

use Demo\App\Advertisement\Domain\Model\Advertisement;
use Demo\App\framework\FrameworkRequest;
use Demo\App\framework\FrameworkResponse;
use Demo\App\framework\SqliteConnection;

final readonly class AdvertisementController
{
    public function changeAdvertisement(FrameworkRequest $request): FrameworkResponse
    {
        $connection = new SqliteConnection();
        $pdo = $connection->connect();

        $result = $pdo->query(sprintf("SELECT * FROM advertisements WHERE id = '%s';",
            ($request->data())['id']
        ))->fetchAll();

        $advertisement = new Advertisement(
            $result[0]['id'],
            $result[0]['description'],
            $result[0]['password'],
        );

        if ($advertisement->password() !== md5(($request->data())['password'])) {
            return new FrameworkResponse([]);
        }

        $advertisement->changeDescription(($request->data())['description']);
        $advertisement->changePassword(($request->data())['password']);

        $pdo->exec(sprintf("UPDATE advertisements SET description = '%s', password = '%s' WHERE id = '%s';",
                $advertisement->description(),
                md5($advertisement->password()),
                $advertisement->id(),
            )
        );

        return new FrameworkResponse([]);
    }

    public function getAdvertisement(FrameworkRequest $request): FrameworkResponse
    {
        $connection = new SqliteConnection();
        $pdo = $connection->connect();

        $result = $pdo->query(sprintf("SELECT * FROM advertisements WHERE id = '%s';",
            ($request->data())['id']
        ))->fetchAll();

        return new FrameworkResponse([
            'id' => $result[0]['id'],
            'description' => $result[0]['description'],
            'password' => $result[0]['password'],
        ]);
    }

    public function listAdvertisements(FrameworkRequest $request): FrameworkResponse
    {
        $connection = new SqliteConnection();
        $pdo = $connection->connect();

        $results = $pdo->query("SELECT * FROM advertisements;")->fetchAll();

        $body = [];
        foreach ($results as $result) {
            $body[] = [
                'id' => $result['id'],
                'description' => $result['description'],
                'password' => $result['password'],
            ];
        }

        return new FrameworkResponse($body);
    }

    public function deleteAdvertisement(FrameworkRequest $request): FrameworkResponse
    {
        $connection = new SqliteConnection();
        $pdo = $connection->connect();

        $result = $pdo->query(sprintf("SELECT * FROM advertisements WHERE id = '%s';",
            ($request->data())['id']
        ))->fetchAll();

        if ($result[0]['password'] !== md5(($request->data())['password'])) {
            return new FrameworkResponse([]);
        }

        $pdo->exec(sprintf("DELETE FROM advertisements WHERE id = '%s';",
            ($request->data())['id']
        ));

        return new FrameworkResponse([]);
    }
}