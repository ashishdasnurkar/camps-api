import { Injectable } from '@nestjs/common';
import { CreateCampDto, EditCampDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CampService {
  constructor(private prisma: PrismaService) {}
  async createCamp(userId: number, dto: CreateCampDto) {
    const camp = await this.prisma.camp.create({
      data: {
        userId,
        ...dto,
      },
    });

    return camp;
  }
  getCamps(userId: number) {
    return this.prisma.camp.findMany({
      where: {
        userId,
      },
    });
  }
  getCampById(userId: number, campId: number) {
    return this.prisma.camp.findFirst({
      where: {
        id: campId,
        userId,
      },
    });
  }
  editCampById(userId: number, campId: number, dto: EditCampDto) {}
  deleteCampById(userId: number, campId: number) {}
}
