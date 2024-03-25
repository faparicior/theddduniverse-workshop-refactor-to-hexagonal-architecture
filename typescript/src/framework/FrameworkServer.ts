import { Database } from "sqlite";
import { PublishAdvertisementController } from "../advertisement/UI/Http/PublishAdvertisementController";
import { PublishAdvertisementUseCase } from "../advertisement/aplication/publish-advertisement/PublishAdvertisementUseCase";
import { SqliteAdvertisementRepository } from "../advertisement/infraestructure/SqliteAdvertisementRepository";
import AdvertisementController from "../api/controllers/AdvertisementController";
import { FrameworkRequest } from "./FrameworkRequest";
import { FrameworkResponse } from "./FrameworkResponse";

export class FrameworkServer {

  private connection: Database;
  private advertisementRepository: SqliteAdvertisementRepository;
  private publishAdvertisementUseCase: PublishAdvertisementUseCase;
  private publishAdvertisementController: PublishAdvertisementController;

  constructor(connection: Database) {
    this.connection = connection
    this.advertisementRepository = new SqliteAdvertisementRepository(this.connection);
    this.publishAdvertisementUseCase = new PublishAdvertisementUseCase(this.advertisementRepository);
    this.publishAdvertisementController = new PublishAdvertisementController(this.publishAdvertisementUseCase)
  }

  async route(request: FrameworkRequest): Promise<FrameworkResponse> {

    const route = `${request.method}:${request.path}`

    switch (route) {
      case "POST:/advertisement":
        return await this.publishAdvertisementController.execute(request)
      default:
        return Promise.resolve(new FrameworkResponse(404, { message: "Not Found" }))
    }

  }
}


