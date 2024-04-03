package framework

import kotlin.reflect.KProperty0

data class FrameworkRequest(val method: KProperty0<String>, val path: String, val content: Map<String, String>)
{
    companion object {
        const val METHOD_GET = "GET"
        const val METHOD_POST = "POST"
    }
}
