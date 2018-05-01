import { Controller, Get, ForbiddenException } from '@nestjs/common'
import { AbstractController } from '../api.common/AbstractController'
import { DogService } from './DogService'

@Controller('api/dogs')
export class DogController extends AbstractController {

  constructor(private readonly dogService: DogService) {
    super(dogService)
  }

  // custom endpoint (use multiple path to avoid conflict with crud operation)
  @Get('search/forbidden')
  async forbidden() {
    console.log('forbidden()')

    throw new ForbiddenException()
  }

}
