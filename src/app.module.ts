import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMemberRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMemberRepository,
    },
  ],
})
export class AppModule {}
