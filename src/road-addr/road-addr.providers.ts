import { Connection } from 'mongoose';
import { RoadAddrSchema } from './road-addr.schema';

export const roadAddrProviders = [
  {
    provide: 'ROAD-ADDR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('road_buld', RoadAddrSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
