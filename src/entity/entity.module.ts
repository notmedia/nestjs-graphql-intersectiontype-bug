import { Module } from '@nestjs/common';

import { EntityResolver } from './entity.resolver';

@Module({
  providers: [EntityResolver],
})
export class EntityModule {}
