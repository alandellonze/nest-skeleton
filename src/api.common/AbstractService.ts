import { Component, NotFoundException } from '@nestjs/common'

@Component()
export class AbstractService {

  // FIXME should be the endpoint
  private readonly entities: []

  init(type: any) {
    this.type = type
    console.log(this.type)

    // FIXME should be the endpoint
    this.entities = [
      { id: 1, name: this.type + '1' },
      { id: 2, name: this.type + '2' }
    ]
  }

  async findAll(): Promise<[]> {
    // FIXME should be the endpoint
    return this.entities
  }

  async findOne(id): Promise<any> {
    // FIXME should be the endpoint
    const found = this.entities.filter((entity) => id == entity.id)
    if (found.length > 0) {
      return found[0]
    } else {
      throw new NotFoundException()
    }
  }

  async create(entity: any) {
    // FIXME should be the endpoint
    entity.id = this.entities.length + 1
    this.entities.push(entity)
  }

}
