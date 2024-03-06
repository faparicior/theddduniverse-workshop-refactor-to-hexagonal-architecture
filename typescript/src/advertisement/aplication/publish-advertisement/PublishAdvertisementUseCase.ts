import { Advertisement } from "../../domain/model/Advertisement";
import { PublishAdvertisementCommand } from "./PublishAdvertisementCommand";

export class PublishAdvertisementUseCase {
  //private repository: Repository;

  constructor(/**repository: repository*/) {
    //this.repository = repository;
  }

  async execute(command: PublishAdvertisementCommand): Promise<void> {
    const advertisement = new Advertisement(
      command.id,
      command.description,
      command.password
    )

    console.log(advertisement.toPrimitives())
  }

}
