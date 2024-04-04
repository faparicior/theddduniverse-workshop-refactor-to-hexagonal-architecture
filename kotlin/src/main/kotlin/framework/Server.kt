package framework

class Server(private val resolver: DependencyInjectionResolver){
    fun route(request: FrameworkRequest): FrameworkResponse {
        return when (request.method) {
            FrameworkRequest.METHOD_GET -> {
                this.get()
            }
            FrameworkRequest.METHOD_POST -> {
                this.post(request)
            }
            else -> {
               return this.notFound()
            }
        }
    }

    private fun get(): FrameworkResponse {
        return FrameworkResponse(FrameworkResponse::STATUS_NOT_FOUND, mapOf())
    }

    private fun post(request: FrameworkRequest): FrameworkResponse {
        return when (request.path) {
            "advertisement" -> {
                resolver.advertisementController().addAdvertisement(request)
            }
            else -> {
                this.notFound()
            }
        }
    }

    private fun notFound(): FrameworkResponse {
        return FrameworkResponse(FrameworkResponse::STATUS_NOT_FOUND, mapOf())
    }
}
