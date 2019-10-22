import * as mongoose from 'mongoose';
import { MONGO_URI } from '../properties';

export class MongoClient {
  public static connect():void {
    mongoose.connect(
      MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true });
  }
}
