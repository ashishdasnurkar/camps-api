import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CampService } from './camp.service';
import { GetUser } from '../auth/decorator';
import { CreateCampDto, EditCampDto } from './dto';

@UseGuards(JwtGuard)
@Controller('camps')
export class CampController {
  constructor(private campService: CampService) {}
  @Post()
  createCamp(@GetUser('id') userId: number, @Body() dto: CreateCampDto) {
    return this.campService.createCamp(userId, dto);
  }

  @Get()
  getCamps(@GetUser('id') userId: number) {
    return this.campService.getCamps(userId);
  }

  @Get(':id')
  getCampById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) campId: number,
  ) {
    return this.campService.getCampById(userId, campId);
  }

  @Patch(':id')
  editCampById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) campId: number,
    @Body() dto: EditCampDto,
  ) {
    return this.campService.editCampById(userId, campId, dto);
  }

  @Delete('id')
  deleteCampById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) campId: number,
  ) {
    return this.campService.deleteCampById(userId, campId);
  }
}
