package advertisement.infrastructure.persisence

import advertisement.domain.AdvertisementRepository
import advertisement.domain.model.Advertisement
import framework.database.DatabaseConnection
import java.security.MessageDigest

class SqLiteAdvertisementRepository(private val connection: DatabaseConnection): AdvertisementRepository {
    override fun save(advertisement: Advertisement) {
        val passwordHash = advertisement.password!!.md5()
        connection.execute(
            "INSERT INTO advertisements (id, description, password) VALUES ('" +
                    "${advertisement.id}', '${advertisement.description}', '$passwordHash')"
        )
    }

    private fun String.md5(): String {
        val md = MessageDigest.getInstance("MD5")
        val digest = md.digest(this.toByteArray())
        return digest.toString()
    }
}
