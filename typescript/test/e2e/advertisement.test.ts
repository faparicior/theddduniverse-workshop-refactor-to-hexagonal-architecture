import { v4 as uuid } from "uuid"
import AdvertisementController from "../../src/api/controllers/AdvertisementController";
import { FrameworkRequest, Method } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/SqliteConnection";

describe("Advertisement", () => {

    beforeAll(async () => {
        const connection = await new SqliteConnection().connect();
        await connection.run('delete from advertisements;')
        connection.close();
    })
    it("Should create a advertisement", async () => {


        const advertisementController = new AdvertisementController()

        const request = new FrameworkRequest(Method.GET, '/',
            { id: uuid(), description: 'Dream advertisement', password: 'myPassword' }
        )

        const actual = await advertisementController.addAdvertisement(request)

        const connection = await new SqliteConnection().connect();

        const dbData = await connection.all("SELECT * FROM advertisements")

        expect(actual.statusCode).toBe(201);

        expect(dbData.length).toBe(1);

    });
});

