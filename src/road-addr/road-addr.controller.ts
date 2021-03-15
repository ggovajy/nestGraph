import { Controller, Get } from '@nestjs/common';
import { RoadAddrService } from './road-addr.service';
import { RoadAddr } from './DTO/road-addr.dto';

@Controller('road-addr')
export class RoadAddrController {
    constructor(private readonly roadAddrService: RoadAddrService) {}

    @Get()
    getHello(): Promise<RoadAddr[]>{
        return this.roadAddrService.getHello();
    }
}
