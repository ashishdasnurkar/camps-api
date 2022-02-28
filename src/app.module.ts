import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CampModule } from './camp/camp.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, CampModule, PrismaModule],
})
export class AppModule {}
