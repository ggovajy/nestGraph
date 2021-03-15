import { Model, CreateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { RoadAddr } from './DTO/road-addr.dto';
@Injectable()
export class RoadAddrService {
    constructor(
        @Inject('ROAD-ADDR_MODEL')
        private roadModel: Model<RoadAddr>,
    ){}
    async getHello(): Promise<RoadAddr[]> {
        return await this.roadModel.find().lean();
    }

    async find(): Promise<RoadAddr[]> {
        return await this.roadModel.find().lean();
    }
    async create(input: CreateQuery<RoadAddr>): Promise<RoadAddr> {
        return this.roadModel.create(input);
      }

}
