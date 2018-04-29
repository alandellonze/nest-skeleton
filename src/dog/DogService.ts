import { AbstractService } from '../api.common/AbstractService'

export class DogService extends AbstractService {

  constructor() {
    super()
    this.init('dog')
  }

}
