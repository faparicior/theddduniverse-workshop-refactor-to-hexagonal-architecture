import { v4 as uuid } from "uuid"
import { FrameworkRequest, Method } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/database/SqliteConnection";
import { FrameworkServer } from "../../src/framework/FrameworkServer";
import { SqliteConnectionFactory } from "../../src/framework/database/SqliteConnectionFactory";
import { DatabaseConnection } from "../../src/framework/database/DatabaseConnection";

let server: FrameworkServer
let connection: DatabaseConnection;
describe("Advertisement", () => {


    beforeAll(async () => {
        server = await FrameworkServer.start();
        connection = await SqliteConnectionFactory.createClient();
        await connection.execute('delete from advertisements;', []);
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

