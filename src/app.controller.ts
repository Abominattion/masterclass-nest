import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMemberRepository } from './repositories/rocket-members-repository';

@Controller()
export class AppController {
  constructor(
    private readonly rocketMembersRepository: RocketMemberRepository,
  ) {}

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
