<?php
declare(strict_types=1);

namespace Demo\App\Advertisement\Infrastructure\Persistence;

use Demo\App\Advertisement\Domain\AdvertisementRepository;
use Demo\App\Advertisement\Domain\Model\Advertisement;
use Demo\App\Framework\Database\DatabaseConnection;
use Demo\App\Framework\database\SqliteConnection;

class SqliteAdvertisementRepository implements AdvertisementRepository
{
    public function __construct(private DatabaseConnection $connection)
    {
    }

    public function save(Advertisement $advertisement): void
    {
        $this->connection->execute(sprintf('
                INSERT INTO advertisements (id, description, password) VALUES (\'%1$s\', \'%2$s\', \'%3$s\') 
                ON CONFLICT(id) DO UPDATE SET description = \'%2$s\', password = \'%3$s\';',
                $advertisement->id(),
                $advertisement->description(),
                md5($advertisement->password()),
            )
        );
    }
}