import { Module } from '@nestjs/common'
import { CatController } from './CatController'
import { CatService } from './CatService'

@Module({
  controllers: [CatController],
  components: [CatService]
})
export class CatModule { }
