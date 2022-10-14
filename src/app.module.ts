import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigService } from './modules/common/providers';
import { ProductModule } from './modules/product/product.module';
import { UsersModule } from './modules/users/users.module';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: [`envs/.${process.env.NODE_ENV.trim()}.env`],
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const mongodb = configService.get('db.mongodb');
        console.log(mongodb);
        return {
          uri: mongodb,
        }
      },
      inject: [ConfigService]
    }),
    AuthModule,
    ProductModule,
    UsersModule,
    EventModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
