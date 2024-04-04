package framework

import controllers.AdvertisementController
import framework.database.DatabaseConnection
import framework.database.SqliteConnection

class DependencyInjectionResolver {
    fun advertisementController(): AdvertisementController {
        return AdvertisementController(this.connection())
    }

    fun connection(): DatabaseConnection {
        return SqliteConnection()
    }
}