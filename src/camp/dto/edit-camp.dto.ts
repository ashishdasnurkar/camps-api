import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditCampDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  location?: string;
  @IsString()
  @IsOptional()
  description?: string;
}
