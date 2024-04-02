import { v4 as uuid } from "uuid"
import { FrameworkRequest, Method } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/database/SqliteConnection";
import { FrameworkServer } from "../../src/framework/FrameworkServer";

let server: FrameworkServer
describe("Advertisement", () => {


    beforeAll(async () => {
        server = new FrameworkServer();
        const connection = await new SqliteConnection().connect();
        await connection.run('delete from advertisements;')
        connection.close();
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

