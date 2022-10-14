import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from './providers';

@Global()
@Module({
    providers: [
        ConfigService
    ],
    exports: [
        ConfigService
    ]
})
export class CommonModule {

}