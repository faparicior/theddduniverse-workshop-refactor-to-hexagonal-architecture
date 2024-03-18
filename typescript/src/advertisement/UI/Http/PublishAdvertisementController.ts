import { v4 as uuid } from 'uuid';
import { FrameworkRequest } from '../../../framework/FrameworkRequest';
import { FrameworkResponse } from '../../../framework/FrameworkResponse';
import { PublishAdvertisementCommand } from '../../aplication/publish-advertisement/PublishAdvertisementCommand';
import { PublishAdvertisementUseCase } from '../../aplication/publish-advertisement/PublishAdvertisementUseCase';

export class PublishAdvertisementController {

  constructor(
    private publishAdvertisementUseCase: PublishAdvertisementUseCase
  ) {
  }
  async execute(req: FrameworkRequest): Promise<FrameworkResponse> {

    const id = uuid();

    const command = new PublishAdvertisementCommand(
      id,
      req.description,
      req.password
    )

    await this.publishAdvertisementUseCase.execute(command)

    return new FrameworkResponse(id)
  }
}
