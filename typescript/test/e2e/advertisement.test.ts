import { v4 as uuid } from "uuid"
import { FrameworkRequest, Method } from "../../src/framework/FrameworkRequest";
import { FrameworkServer } from "../../src/framework/FrameworkServer";
import { SqliteConnectionFactory } from "../../src/framework/database/SqliteConnectionFactory";
import { DatabaseConnection } from "../../src/framework/database/DatabaseConnection";

let connection: DatabaseConnection;
let server: FrameworkServer
describe("Advertisement", () => {


    beforeAll(async () => {
        connection = await SqliteConnectionFactory.createClient();
        server = new FrameworkServer(connection);

        await connection.execute('delete from advertisements;', [])
    })

    it("Should create a advertisement", async () => {

        const request = new FrameworkRequest(Method.POST, '/advertisement',
            { id: uuid(), description: 'Dream advertisement', password: 'myPassword' }
        )

        const actual = await server.route(request)

        const dbData = await connection.query("SELECT * FROM advertisements")

        expect(actual.statusCode).toBe(201);

        expect(dbData.length).toBe(1);

    });
});

