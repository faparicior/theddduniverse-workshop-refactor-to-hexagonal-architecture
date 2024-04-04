package framework

data class FrameworkRequest(val method: String, val path: String, val content: Map<String, String>)
{
    companion object {
        const val METHOD_GET = "GET"
        const val METHOD_POST = "POST"
    }
}
