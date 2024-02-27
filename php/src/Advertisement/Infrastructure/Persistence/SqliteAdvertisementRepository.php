<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\Infrastructure\Persistence;

use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Domain\Model\Advertisement;
use Demo\App\framework\SqliteConnection;

class SqliteAdvertisementRepository implements AdvertisementRepository
{
    private \PDO $pdo;
    public function __construct(SqliteConnection $connection)
    {
        $this->pdo = $connection->connect();
    }

    public function save(Advertisement $advertisement): void
    {
        $this->pdo->exec(sprintf('
                INSERT INTO advertisements (id, description, password) VALUES (\'%1$s\', \'%2$s\', \'%3$s\') 
                ON CONFLICT(id) DO UPDATE SET description = \'%2$s\', password = \'%3$s\';',
                $advertisement->id(),
                $advertisement->description(),
                md5($advertisement->password()),
            )
        );
    }
}