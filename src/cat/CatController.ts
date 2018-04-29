import { Controller } from '@nestjs/common'
import { AbstractController } from '../api.common/AbstractController'
import { CatService } from './CatService'

@Controller('cats')
export class CatController extends AbstractController {

  constructor(private readonly catService: CatService) {
    super(catService)
  }

}
