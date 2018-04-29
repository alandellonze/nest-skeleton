import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { AppModule } from './app.module'
import { GlobalExceptionFilter } from './common/GlobalExceptionFilter'
import { RoleGuard } from './common/RoleGuard'
import { LoggingInterceptor } from './common/LoggingInterceptor'

async function bootstrap() {
  // define app
  const app = await NestFactory.create(AppModule)

  // apply validation
  app.useGlobalPipes(new ValidationPipe())

  // apply custom exception filter
  app.useGlobalFilters(new GlobalExceptionFilter())

  // apply custom guard
  app.useGlobalGuards(new RoleGuard(new Reflector()))

  // apply custom logging interceptor
  app.useGlobalInterceptors(new LoggingInterceptor());

  // start app
  await app.listen(3000)
}

bootstrap()
