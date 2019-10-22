import { prop, Typegoose } from 'typegoose';

class TravelSchema extends Typegoose 
{
  @prop()
  start?: Object;

  @prop()
  end?: Object;

  @prop()
  country?: Object;

  @prop()
  city?: Object;

  @prop()
  passenger?: Object;

  @prop()
  driver?: Object;

  @prop()
  car?: Object;

  @prop()
  status?: Object;

  @prop()
  check_code?: Object;

  @prop()
  createdAt?: Object;

  @prop()
  updatedAt: Object;

  @prop()
  price?: Object;

  @prop()
  driver_location?: Object;
}

export const TravelModel = 
  new TravelSchema().getModelForClass(TravelSchema);
