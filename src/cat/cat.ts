import { Transform } from 'class-transformer'
import { IsString, IsInt } from 'class-validator'

export class Cat {

  @IsString() readonly name: string

  @Transform((value) => isNaN(+value) ? value : +value)
  @IsInt()
  readonly age: number

  @IsString() readonly breed: string

}
