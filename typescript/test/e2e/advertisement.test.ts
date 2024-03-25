import { v4 as uuid } from "uuid"
import { FrameworkRequest, Method } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/SqliteConnection";
import { FrameworkServer } from "../../src/framework/FrameworkServer";
import { Database } from "sqlite";

let connection: Database;
let server: FrameworkServer
describe("Advertisement", () => {


    beforeAll(async () => {
        connection = await new SqliteConnection().connect();
        server = new FrameworkServer(connection);

        await connection.run('delete from advertisements;')
    })

    afterAll(async () => {
        connection.close()
    })

    it("Should create a advertisement", async () => {

        const request = new FrameworkRequest(Method.POST, '/advertisement',
            { id: uuid(), description: 'Dream advertisement', password: 'myPassword' }
        )
        const actual = await server.route(request)

        const connection = await new SqliteConnection().connect();

        const dbData = await connection.all("SELECT * FROM advertisements")

        expect(actual.statusCode).toBe(201);

        expect(dbData.length).toBe(1);

    });
});

