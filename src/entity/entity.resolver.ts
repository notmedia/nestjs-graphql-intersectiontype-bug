import { Args, Query, Resolver, ObjectType, Field } from '@nestjs/graphql';

import { GetEntityArgs } from './dto/get.args';

@ObjectType()
export class Entity {
  @Field()
  name: string;
}

@Resolver(Entity)
export class EntityResolver {
  @Query(() => [Entity])
  get(@Args() args: GetEntityArgs): Promise<Entity[]> {
    return Promise.resolve([]);
  }
}
