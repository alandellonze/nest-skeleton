import { Controller, Get, Post, HttpCode, Body, Param, ParseIntPipe, ForbiddenException } from '@nestjs/common'
import { Roles } from '../common/RoleDecorator'
import { CatService } from './cat.service'
import { Cat } from './cat'

@Controller('cats')
export class CatController {

  constructor(private readonly catService: CatService) {
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log('findAll()')

    return this.catService.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe()) id: number): Promise<Cat> {
    console.log('findAll(', id, ')')

    return this.catService.findOne(id)
  }

  @Post()
  @HttpCode(204)
  @Roles('admin')
  async create( @Body() cat: Cat) {
    console.log('create(', cat, ')')

    this.catService.create(cat)
  }

  // custom endpoint (use multiple path to avoid conflict with crud operation)
  @Get('search/forbidden')
  async forbidden() {
    console.log('forbidden()')

    throw new ForbiddenException()
  }

}
