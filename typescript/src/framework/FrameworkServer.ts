import { Database } from "sqlite";
import { PublishAdvertisementController } from "../advertisement/UI/Http/PublishAdvertisementController";
import { PublishAdvertisementUseCase } from "../advertisement/aplication/publish-advertisement/PublishAdvertisementUseCase";
import { SqliteAdvertisementRepository } from "../advertisement/infraestructure/SqliteAdvertisementRepository";
import { FrameworkRequest } from "./FrameworkRequest";
import { FrameworkResponse } from "./FrameworkResponse";
import { DatabaseConnection } from "./database/DatabaseConnection";
import SqliteConnection from "./database/SqliteConnection";
import { SqliteConnectionFactory } from "./database/SqliteConnectionFactory";

export class FrameworkServer {

  private connection: DatabaseConnection;
  private advertisementRepository: SqliteAdvertisementRepository;
  private publishAdvertisementUseCase: PublishAdvertisementUseCase;
  private publishAdvertisementController: PublishAdvertisementController;

  constructor(connection: DatabaseConnection) {
    this.connection = connection;
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


