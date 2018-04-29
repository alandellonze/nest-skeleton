import { Controller, Get, Post, HttpCode, Body, Param, ValidationPipe, ParseIntPipe } from '@nestjs/common'
import { AbstractService } from './AbstractService'
import { Roles } from '../api.common/RoleDecorator'

@Controller()
export class AbstractController {

  constructor(private readonly service: AbstractService) {
  }

  @Get()
  async findAll(): Promise<any[]> {
    console.log('findAll()')

    return this.service.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe()) id: number): Promise<any> {
    console.log('findAll(', id, ')')

    return this.service.findOne(id)
  }

  @Post()
  @HttpCode(204)
  @Roles('admin')
  async create( @Body(new ValidationPipe()) entity: any) {
    console.log('create(', entity, ')')

    this.service.create(entity)
  }

}
