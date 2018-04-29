import { Module } from '@nestjs/common'
import { DogController } from './DogController'
import { DogService } from './DogService'

@Module({
  controllers: [DogController],
  components: [DogService]
})
export class DogModule { }
