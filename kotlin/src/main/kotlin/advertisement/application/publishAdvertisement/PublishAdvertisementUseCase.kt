package advertisement.application.publishAdvertisement

import advertisement.domain.AdvertisementRepository
import advertisement.domain.model.Advertisement

class PublishAdvertisementUseCase(private val advertisementRepository: AdvertisementRepository) {
    fun execute(addAdvertisementCommand: PublishAdvertisementCommand) {
        val advertisement = Advertisement(
            addAdvertisementCommand.id,
            addAdvertisementCommand.description,
            addAdvertisementCommand.password,
        )

        advertisementRepository.save(advertisement)
    }
}
