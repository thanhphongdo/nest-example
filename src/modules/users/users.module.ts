import { Module, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}
