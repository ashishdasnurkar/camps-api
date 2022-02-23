import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CampModule } from './camp/camp.module';

@Module({
  imports: [AuthModule, UserModule, CampModule],
})
export class AppModule {}
