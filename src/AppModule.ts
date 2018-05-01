import { Module } from '@nestjs/common'
import { AuthModule } from './auth/AuthModule'
import { CatModule } from './cat/CatModule'
import { DogModule } from './dog/DogModule'

@Module({
  // import custom modules
  imports: [
    AuthModule,
    CatModule,
    DogModule
  ]
})
export class AppModule { }
