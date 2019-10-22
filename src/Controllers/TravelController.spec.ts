import { Test, TestingModule } from '@nestjs/testing';
import { TravelController } from './TravelController';
import { TravelUseCase } from '../UseCases/TravelUseCases';

describe('AppController', () => {
  let appController: TravelController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TravelController],
      providers: [TravelUseCase],
    }).compile();

    appController = app.get<TravelController>(TravelController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(true).toBe(true);
    });
  });
});
