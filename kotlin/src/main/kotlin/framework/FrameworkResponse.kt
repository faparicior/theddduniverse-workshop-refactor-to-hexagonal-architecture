package framework

data class FrameworkResponse(val statusCode: Int, val content: Map<String, String>)
{
    companion object {
        const val STATUS_OK = 200
        const val STATUS_CREATED = 201
        const val STATUS_BAD_REQUEST = 400
        const val STATUS_NOT_FOUND = 404
    }
}
