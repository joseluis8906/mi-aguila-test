import { Injectable } from "@nestjs/common";
import { TravelModel } from "../Models/TravelModel";

@Injectable()
export class TravelRepository
{
  async create(travel: any): Promise<boolean> {
    try {
      await TravelModel.create(travel);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async countAll(): Promise<number> {
    try {
      return await TravelModel.countDocuments();
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async countByCity(city: string): Promise<number> {
    try {
      return (await TravelModel.find({ city: { name: city } })).length;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
}