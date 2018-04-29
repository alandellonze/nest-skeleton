import { AbstractService } from '../api.common/AbstractService'

export class CatService extends AbstractService {

  constructor() {
    super()
    this.init('cat')
  }

}
