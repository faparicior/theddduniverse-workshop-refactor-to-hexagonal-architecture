import { FrameworkRequest } from '../../../framework/FrameworkRequest';
import { FrameworkResponse } from '../../../framework/FrameworkResponse';

export class PublishAdvertisementController {

  constructor() {
  }
  async run(req: FrameworkRequest): Promise<FrameworkResponse> {


    return new FrameworkResponse("SUPER-ID")
  }
}
