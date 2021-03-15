// src/user/user.schema.ts
import * as mongoose from 'mongoose';

export const RoadAddrSchema = new mongoose.Schema({
  DONG_CD: String,
  SIDO_NM: String,
  SIGUNGU_NM: String,
  EMD_NM:String,
});

