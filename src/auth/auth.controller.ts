import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup() {
    return "I'm signed up...";
  }

  @Post('signin')
  signin() {
    return "I'm signed in...";
  }
}
