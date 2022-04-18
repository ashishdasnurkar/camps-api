import { IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateCampDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  location: string;
  @IsString()
  @IsOptional()
  description?: string;
}
