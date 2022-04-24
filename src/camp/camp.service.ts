import { ForbiddenException, Injectable } from '@nestjs/common';
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
  async editCampById(userId: number, campId: number, dto: EditCampDto) {
    const camp = await this.prisma.camp.findUnique({
      where: {
        id: campId,
      },
    });
    if (!camp || camp.userId != userId) {
      throw new ForbiddenException('Access to resource denied!');
    }

    return this.prisma.camp.update({
      where: {
        id: campId,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteCampById(userId: number, campId: number) {
    const camp = await this.prisma.camp.findUnique({
      where: {
        id: campId,
      },
    });
    if (!camp || camp.userId != userId) {
      throw new ForbiddenException('Access to resource denied!');
    }
    await this.prisma.camp.delete({
      where: {
        id: campId,
      },
    });
  }
}
