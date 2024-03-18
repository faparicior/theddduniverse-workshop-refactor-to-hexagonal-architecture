import { Database } from "sqlite";
import AdvertisementController from "../../src/api/controllers/AdvertisementController";
import { FrameworkRequest } from "../../src/framework/FrameworkRequest";
import SqliteConnection from "../../src/framework/SqliteConnection";
import { SqliteAdvertisementRepository } from "../../src/advertisement/infraestructure/SqliteAdvertisementRepository";
import { PublishAdvertisementUseCase } from "../../src/advertisement/aplication/publish-advertisement/PublishAdvertisementUseCase";
import { PublishAdvertisementController } from "../../src/advertisement/UI/Http/PublishAdvertisementController";


let publishAdvertisementController: PublishAdvertisementController;
let connection: Database;
describe("Advertisement", () => {

    beforeAll(async () => {
        connection = await new SqliteConnection().connect();
        const advertisementRepository = new SqliteAdvertisementRepository(connection);
        const publishAdvertisementUseCase = new PublishAdvertisementUseCase(advertisementRepository);
        publishAdvertisementController = new PublishAdvertisementController(publishAdvertisementUseCase)

        await connection.run('delete from advertisements;')
    })

    afterAll(async () => {
        connection.close();
    })
    it("Should create a advertisement", async () => {


        const advertisementController = new AdvertisementController()

        const request = new FrameworkRequest('Dream advertisement', 'myPassword')

        // const actual = await advertisementController.addAdvertisement(request)
        const actual = await publishAdvertisementController.execute(request)


        const connection = await new SqliteConnection().connect();

        const dbData = await connection.all("SELECT * FROM advertisements")

        expect(actual.id).toBeDefined();
        expect(dbData.length).toBe(1);

    });
});

