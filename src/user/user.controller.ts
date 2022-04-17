import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  @UseGuards(JwtGuard)
  editUser(@Body() dto: EditUserDto, @GetUser() user: User) {
    return this.userService.editUser(user.id, dto);
  }
}
