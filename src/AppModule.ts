import { Module } from '@nestjs/common'
import { CatModule } from './cat/CatModule'
import { DogModule } from './dog/DogModule'

@Module({
  // import custom modules
  imports: [
    CatModule,
    DogModule
  ]
})
export class AppModule { }
