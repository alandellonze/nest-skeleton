import { ExceptionFilter, Catch } from '@nestjs/common'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {

  catch(exception, response) {
    console.log('exception, status:', exception.status, ', message:', exception.message)

    response.status(exception.status).json({
      statusCode: exception.status,
      message: exception.message
    })
  }

}
