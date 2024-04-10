import { Database } from "sqlite";
import { PublishAdvertisementController } from "../advertisement/UI/Http/PublishAdvertisementController";
import { PublishAdvertisementUseCase } from "../advertisement/application/publish-advertisement/PublishAdvertisementUseCase";
import { SqliteAdvertisementRepository } from "../advertisement/infrastructure/SqliteAdvertisementRepository";
import { FrameworkRequest } from "./FrameworkRequest";
import { FrameworkResponse } from "./FrameworkResponse";
import { DatabaseConnection } from "./database/DatabaseConnection";
import { SqliteConnectionFactory } from "./database/SqliteConnectionFactory";

export class FrameworkServer {

  private constructor(
    private publishAdvertisementController: PublishAdvertisementController) {

  };

  static async start(): Promise<FrameworkServer> {
    const connection = await SqliteConnectionFactory.createClient();
    const advertisementRepository = new SqliteAdvertisementRepository(connection);
    const publishAdvertisementUseCase = new PublishAdvertisementUseCase(advertisementRepository);
    const publishAdvertisementController = new PublishAdvertisementController(publishAdvertisementUseCase)

    return new FrameworkServer(publishAdvertisementController);

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


