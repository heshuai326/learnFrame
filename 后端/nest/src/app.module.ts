import { Configuration } from './shared/configuration/configuration.enum';
import { ConfigurationService } from './shared/configuration/configuration.service';
import { LogMiddleware } from './log/log.middleware';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UsersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LogMiddleware)
      .with('ApplicationModule')
      .forRoutes('/');
  }
  static host: string;
  static port: number | string;
  static isDev; boolean;

  constructor(private readonly _configurationService: ConfigurationService) {
    AppModule.port = AppModule.narmalizePort(_configurationService.get(Configuration.PORT));
    AppModule.host = _configurationService.get(Configuration.HOST);
    AppModule.isDev = _configurationService.isDevelopment;
  }

  private static narmalizePort(param: number | string): number | string {
    const portNumber: number = typeof param === 'string' ? parseInt(param, 10): param;
    if (isNaN(portNumber)) return param;
    else if( portNumber >= 0) return portNumber;
  }
}
