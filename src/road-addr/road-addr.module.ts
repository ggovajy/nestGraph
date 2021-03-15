import { Module } from '@nestjs/common';
import { RoadAddrController } from './road-addr.controller';
import { RoadAddrService } from './road-addr.service';
import { DatabaseModule } from '../database/database.module';
import { roadAddrProviders } from './road-addr.providers';
import { RoadAddrResolver } from './road-addr.resolver';
@Module({
    imports: [DatabaseModule],
    controllers:[RoadAddrController],
    providers: [RoadAddrService, ...roadAddrProviders, RoadAddrResolver],
})
export class RoadAddrModule {}
