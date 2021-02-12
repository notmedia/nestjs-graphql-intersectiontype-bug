import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join('schema.gql'),
      playground: true,
    }),

    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
