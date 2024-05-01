package advertisement.ui.http

import advertisement.application.publishAdvertisement.PublishAdvertisementCommand
import advertisement.application.publishAdvertisement.PublishAdvertisementUseCase
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