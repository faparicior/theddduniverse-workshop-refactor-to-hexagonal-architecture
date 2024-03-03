import { Database } from "sqlite3";
import AdvertisementController from "../../src/api/controllers/AdvertisementController";
import { FrameworkRequest } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/SqliteConnection";
import { promisify } from 'util';
describe("Advertisement", () => {

    beforeAll(async () => {
        const connection = await new SqliteConnection().connect();
        await connection.run('delete from advertisements;')
        connection.close();
    })
    it("Should create a advertisement", async () => {


        const advertisementController = new AdvertisementController()

        const request = new FrameworkRequest('Dream advertisement', 'myPassword')

        const actual = await advertisementController.addAdvertisement(request)

        const connection = await new SqliteConnection().connect();

        const dbData = await connection.all("SELECT * FROM advertisements")

        expect(actual.id).toBeDefined();
        expect(dbData.length).toBe(1);

    });
});

