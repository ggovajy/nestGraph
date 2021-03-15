// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { roadAddrProviders } from './road-addr/road-addr.providers';
import { databaseProviders } from './database/database.providers';
import { RoadAddrController } from './road-addr/road-addr.controller';
import { RoadAddrService } from './road-addr/road-addr.service';
import { RoadAddrModule } from './road-addr/road-addr.module';
import { RoadAddrResolver } from './road-addr/road-addr.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    RoadAddrModule,
  ],
  controllers: [AppController, RoadAddrController],
  providers: [
    AppService,
    UserService,
    UserResolver,
    RoadAddrService,
    RoadAddrResolver,
    ...databaseProviders,
    ...userProviders,
    ...roadAddrProviders,
  ],
})
export class AppModule {}
