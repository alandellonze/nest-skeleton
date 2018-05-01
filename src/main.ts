import { NestFactory } from '@nestjs/core'
import { Reflector } from '@nestjs/core'

import { AppModule } from './AppModule'
import { GlobalExceptionFilter } from './api.common/GlobalExceptionFilter'
import { RoleGuard } from './api.common/RoleGuard'
import { LoggingInterceptor } from './api.common/LoggingInterceptor'

async function bootstrap() {
  // define app
  const app = await NestFactory.create(AppModule)

  // apply custom exception filter
  app.useGlobalFilters(new GlobalExceptionFilter())

  // apply custom guard
  app.useGlobalGuards(new RoleGuard(new Reflector()))

  // apply custom logging interceptor
  app.useGlobalInterceptors(new LoggingInterceptor())

  // start app
  await app.listen(3000)
}

bootstrap()
