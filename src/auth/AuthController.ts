import { Controller } from '@nestjs/common'
import { AbstractController } from '../api.common/AbstractController'
import { AuthService } from './AuthService'

@Controller('api/auth')
export class AuthController extends AbstractController {

  constructor(private readonly authService: AuthService) {
    super(authService)
  }

}
