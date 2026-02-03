import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('createMember')
  async create(@Body() createMemberDto: CreateMemberDto) {
    return await this.memberService.create(createMemberDto);
  }

  @Get('memberInfo')
  async findAll() {
    return await this.memberService.findAll();
  }

  @Get('specificInfoMember/:id')
  async findOne(@Param('id') id: string) {
    return await this.memberService.findOne(+id);
  }

  @Patch('updateMember/:id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return await this.memberService.update(+id, updateMemberDto);
  }

  @Delete('removeMember/:id')
  async remove(@Param('id') id: string) {
    return await this.memberService.remove(+id);
  }
}
