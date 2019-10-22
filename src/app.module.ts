import { Module } from '@nestjs/common';
import { TravelController } from './Controllers/TravelController';
import { TravelUseCase } from './UseCases/TravelUseCases';
import { TravelRepository } from './Repositories/TravelRepository';

@Module({
  imports: [],
  controllers: [TravelController],
  providers: [TravelUseCase, TravelRepository],
})
export class AppModule {}
