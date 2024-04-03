package controllers

import framework.FrameworkRequest
import framework.FrameworkResponse
import framework.database.DatabaseConnection
import model.AdvertisementModel
import java.security.MessageDigest

class AdvertisementController (private val connection: DatabaseConnection) {
    fun addAdvertisement(request: FrameworkRequest): FrameworkResponse {
        val advertisement = AdvertisementModel(
            request.content["id"],
            request.content["description"],
            request.content["password"],
            )

        val passwordHash = advertisement.password!!.md5()
        connection.execute(
            "INSERT INTO advertisements (id, description, password) VALUES ('${advertisement.id}', '${advertisement.description}', '$passwordHash')"
        )

        return FrameworkResponse(
            FrameworkResponse::STATUS_CREATED,
            mapOf(),
        )
    }

    private fun String.md5(): String {
        val md = MessageDigest.getInstance("MD5")
        val digest = md.digest(this.toByteArray())
        return digest.toString()
    }
}

