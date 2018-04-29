import { Component, NotFoundException } from '@nestjs/common'
import { Cat } from './cat'

@Component()
export class CatService {

  private readonly cats: Cat[] = [
    { id: 1, name: 'cat1' },
    { id: 2, name: 'cat2' }
  ]

  async findAll(): Promise<Cat[]> {
    return this.cats
  }

  async findOne(id): Promise<Cat> {
    const found = this.cats.filter((cat) => id == cat.id)
    if (found.length > 0) {
      return found[0]
    } else {
      throw new NotFoundException()
    }
  }

  async create(cat: Cat) {
    cat.id = this.cats.length + 1
    this.cats.push(cat)
  }

}
