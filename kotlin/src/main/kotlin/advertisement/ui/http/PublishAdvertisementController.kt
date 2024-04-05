package advertisement.ui.http

import advertisement.application.addAdvertisement.PublishAdvertisementCommand
import advertisement.application.addAdvertisement.PublishAdvertisementUseCase
import framework.FrameworkRequest
import framework.FrameworkResponse

class PublishAdvertisementController(private val useCase: PublishAdvertisementUseCase) {

    fun execute(request: FrameworkRequest): FrameworkResponse {
        useCase.execute(
            PublishAdvertisementCommand(
                request.content["id"]!!,
                request.content["description"]!!,
                request.content["password"]!!,
            )
        )

        return FrameworkResponse(
            FrameworkResponse.STATUS_CREATED,
            mapOf(),
        )
    }
}