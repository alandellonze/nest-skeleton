import { Controller, Get, ForbiddenException } from '@nestjs/common'
import { AbstractController } from '../api.common/AbstractController'
import { CatService } from './CatService'

@Controller('api/cats')
export class CatController extends AbstractController {

  constructor(private readonly catService: CatService) {
    super(catService)
  }

  // custom endpoint (use multiple path to avoid conflict with crud operation)
  @Get('search/forbidden')
  async forbidden() {
    console.log('forbidden()')

    throw new ForbiddenException()
  }

}
