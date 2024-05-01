package framework

import advertisement.application.publishAdvertisement.PublishAdvertisementUseCase
import advertisement.domain.AdvertisementRepository
import advertisement.infrastructure.persisence.SqLiteAdvertisementRepository
import advertisement.ui.http.PublishAdvertisementController
import framework.database.DatabaseConnection
import framework.database.SqliteConnection

class DependencyInjectionResolver {
    fun publishAdvertisementController(): PublishAdvertisementController {
        return PublishAdvertisementController(
            PublishAdvertisementUseCase(
                this.advertisementRepository()
            )
        )
    }

    fun advertisementRepository(): AdvertisementRepository {
        return SqLiteAdvertisementRepository(
            this.connection()
        )
    }

    fun connection(): DatabaseConnection {
        return SqliteConnection()
    }
}