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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiTags('Member')
@ApiBearerAuth()
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @ApiOperation({ summary: 'This API is for creating membership' })
  @Roles('ADMIN')
  @Post('createMember')
  async create(@Body() createMemberDto: CreateMemberDto) {
    return await this.memberService.create(createMemberDto);
  }

  @ApiOperation({ summary: 'This API is for showing all membership data' })
  @Roles('ADMIN')
  @Get('memberInfo')
  async findAll() {
    return await this.memberService.findAll();
  }

  @ApiOperation({ summary: 'This API is for showing specific membership data' })
  @Public()
  @Get('specificInfoMember/:id')
  async findOne(@Param('id') id: string) {
    return await this.memberService.findOne(+id);
  }

  @ApiOperation({ summary: 'This API is for updating membership data' })
  @Public()
  @Patch('updateMember/:id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return await this.memberService.update(+id, updateMemberDto);
  }

  @ApiOperation({ summary: 'This API is for deleting membership data' })
  @Roles('ADMIN')
  @Delete('removeMember/:id')
  async remove(@Param('id') id: string) {
    return await this.memberService.remove(+id);
  }
}
