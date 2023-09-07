import { PrismaService } from 'src/database/prisma.service';
import { RocketMemberRepository } from '../rocket-members-repository';
import { randomUUID } from 'node:crypto';

export class PrismaRocketMemberRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
