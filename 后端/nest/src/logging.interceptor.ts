import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    console.log('Before...')
    const now = Date.now()
    return call$.pipe(map((data) => (
      console.log(`After...${Date.now() - now}ms`)
     )));
  }
}
