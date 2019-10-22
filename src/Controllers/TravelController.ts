import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TravelUseCase } from '../UseCases/TravelUseCases';
import { get } from 'http';

@Controller('travels')
export class TravelController 
{
  constructor(private readonly travelUseCase: TravelUseCase) {}

  @Post()
  async create(@Body() travel: any): Promise<void> {
    await this.travelUseCase.create(travel);
  }

  @Get()
  async countAll(): Promise<number> {
    return await this.travelUseCase.countAll();
  }

  @Get(':city')
  async countByCity(@Param('city') city: string): Promise<number> {
    return await this.travelUseCase.countByCity(city);
  }
}
