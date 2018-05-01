import { AbstractService } from '../api.common/AbstractService'

export class AuthService extends AbstractService {

  constructor() {
    super()
    this.init('auth')
  }

  async findAll(): Promise<any> {
    return {
      token: 'fakeToken'
    }
  }

}
