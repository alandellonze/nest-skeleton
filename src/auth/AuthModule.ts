import { Module } from '@nestjs/common'
import { AuthController } from './AuthController'
import { AuthService } from './AuthService'

@Module({
  controllers: [AuthController],
  components: [AuthService]
})
export class AuthModule { }
