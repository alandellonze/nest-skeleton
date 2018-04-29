import { Controller } from '@nestjs/common'
import { AbstractController } from '../api.common/AbstractController'
import { DogService } from './DogService'

@Controller('dogs')
export class DogController extends AbstractController {

  constructor(private readonly dogService: DogService) {
    super(dogService)
  }

}
