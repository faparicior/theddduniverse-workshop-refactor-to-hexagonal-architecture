package e2e

import framework.DependencyInjectionResolver
import framework.FrameworkRequest
import framework.Server
import framework.database.SqliteConnection
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

class AdvertisementTest {
    companion object {
        private const val DESCRIPTION = "Dream advertisement"
        private const val ID = "6fa00b21-2930-483e-b610-d6b0e5b19b29"
        private const val PASSWORD = "myPassword"
    }

    private lateinit var connection: SqliteConnection

    @BeforeEach
    fun init() {
        this.connection = SqliteConnection().connect()
        this.connection.execute("DELETE FROM advertisements")
    }

    @Test
    fun `add advertisement`() {

        val server = Server(DependencyInjectionResolver())

        server.route(FrameworkRequest(
                FrameworkRequest::METHOD_POST,
                "advertisement",
                mapOf(
                    "id" to ID,
                    "description" to DESCRIPTION,
                    "password" to PASSWORD,
                )
            )
        )

        val resultSet = this.connection.query("SELECT * from advertisements;")
        var description = ""

        if (resultSet.next()) {
            description = resultSet.getString(2)
        }

        //Assertions.assertEquals(FLAT_DESCRIPTION, response.data["description"])
        Assertions.assertEquals(DESCRIPTION, description)
    }
}
