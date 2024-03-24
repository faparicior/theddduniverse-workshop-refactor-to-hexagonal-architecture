import AdvertisementController from "../api/controllers/AdvertisementController";
import { FrameworkRequest } from "./FrameworkRequest";
import { FrameworkResponse } from "./FrameworkResponse";

export class server {
  private advertisementController: AdvertisementController
  constructor() {
    this.advertisementController = new AdvertisementController()
  }

  async route(request: FrameworkRequest): Promise<FrameworkResponse> {
    const route = ` ${request.method}:${request.path}`
    switch (route) {
      case "GET:/":
        return await this.advertisementController.addAdvertisement(request)
      default:
        return Promise.resolve(new FrameworkResponse(404, { message: "Not Found" }))
    }

  }
}


