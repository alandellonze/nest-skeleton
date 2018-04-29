import { Guard, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Guard()
export class RoleGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {
  }

  canActivate(req, context: ExecutionContext): boolean {
    let canActivate = true

    const { parent, handler } = context
    const roles = this.reflector.get<string[]>('roles', handler)
    const user = req.user
    if (roles && user) {
      const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => item === role))
      canActivate = user.roles && hasRole()
    }

    console.log('canActivate: ' + parent.name + '.' + handler.name + ', for user: ' + user + ' [roles: ' + roles + ']: ' + canActivate)
    return canActivate
  }

}
