import { Module } from '@nestjs/common'
import { CatModule } from './cat/cat.module'

@Module({
  // import custom modules
  imports: [CatModule]
})
export class AppModule { }
