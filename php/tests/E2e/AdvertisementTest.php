<?php
declare(strict_types=1);

namespace Tests\Demo\App\E2e;

use Demo\App\Framework\Database\DatabaseConnection;
use Demo\App\Framework\DependencyInjectionResolver;
use Demo\App\Framework\FrameworkRequest;
use Demo\App\Framework\FrameworkResponse;
use Demo\App\Framework\Server;
use PHPUnit\Framework\TestCase;

final class AdvertisementTest extends TestCase
{
    private const string FLAT_ID = '6fa00b21-2930-483e-b610-d6b0e5b19b29';
    private DependencyInjectionResolver $resolver;
    private Server $server;
    private DatabaseConnection $connection;


    protected function setUp(): void
    {
        $this->resolver = new DependencyInjectionResolver();
        $this->connection = $this->resolver->connection();
        $this->emptyDatabase();
        $this->server = new Server($this->resolver);
        parent::setUp();
    }

    public function testShouldCreateAnAdvertisement(): void
    {
        $request = new FrameworkRequest(
            FrameworkRequest::METHOD_POST,
            'advertisement',
            [
                'id' => self::FLAT_ID,
                'description' => 'Dream advertisement ',
                'password' => 'myPassword',
            ]
        );

        $response = $this->server->route($request);

        self::assertEquals(FrameworkResponse::STATUS_CREATED, $response->statusCode());
        $resultSet = $this->connection->query('select * from advertisements;');
        self::assertEquals('Dream advertisement ', $resultSet[0][1]);
    }

    private function emptyDatabase(): void
    {
        $this->connection->execute('delete from advertisements;');
    }
}
