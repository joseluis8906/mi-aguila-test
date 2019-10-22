import { Injectable } from '@nestjs/common';
import { TravelRepository } from '../Repositories/TravelRepository';
 
@Injectable()
export class TravelUseCase 
{
  constructor(private readonly travelRepository: TravelRepository) {}
  
  async create(travel: any): Promise<void> {
    await this.travelRepository.create(travel);
  }

  async countAll(): Promise<number> {
    return await this.travelRepository.countAll();
  }

  async countByCity(city: string): Promise<number> {
    return await this.travelRepository.countByCity(city);
  }
}
