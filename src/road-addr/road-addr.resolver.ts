import { Args, Resolver,Query,Mutation } from '@nestjs/graphql';
import { RoadAddr } from './DTO/road-addr.dto';
import { CreateRoadAddrInput } from './road-addr.input';
import { RoadAddrService } from './road-addr.service';


@Resolver(() => RoadAddr)
export class RoadAddrResolver {
    constructor(private roadAddrService: RoadAddrService){}

    @Mutation(() => RoadAddr)
    async createRoadAddr(@Args('input') input: CreateRoadAddrInput) {
      return this.roadAddrService.create(input);
    }

    @Query(() => [RoadAddr])
    async roadAddr(){
        return this.roadAddrService.find();
    }
}
