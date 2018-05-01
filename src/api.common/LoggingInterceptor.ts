import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {

  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    // log enter
    const { parent, handler } = context
    console.log(parent.name + '.' + handler.name + '(params:', dataOrRequest.params, ', body:', dataOrRequest.body, ')')

    // save enter instant
    const now = Date.now()

    // execute method
    return stream$.do(() => console.log(parent.name + '.' + handler.name + '(', dataOrRequest.params, ')' + ` ... ${Date.now() - now}ms`))
  }

}