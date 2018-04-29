import { Controller, Get, Post, HttpCode, Body, Param, ValidationPipe, ParseIntPipe, ForbiddenException } from '@nestjs/common'
import { AbstractService } from './AbstractService'
import { Roles } from '../api.common/RoleDecorator'

@Controller()
export class AbstractController {

  constructor(private readonly service: AbstractService) {
  }

  @Get()
  async findAll(): Promise<AbstractEntity[]> {
    console.log('findAll()')

    return this.service.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe()) id: number): Promise<AbstractEntity> {
    console.log('findAll(', id, ')')

    return this.service.findOne(id)
  }

  @Post()
  @HttpCode(204)
  @Roles('admin')
  async create( @Body(new ValidationPipe()) abstractEntity: AbstractEntity) {
    console.log('create(', abstractEntity, ')')

    this.service.create(abstractEntity)
  }

  // custom endpoint (use multiple path to avoid conflict with crud operation)
  @Get('search/forbidden')
  async forbidden() {
    console.log('forbidden()')

    throw new ForbiddenException()
  }

}
