import { ArgsType, Field, InputType, IntersectionType } from '@nestjs/graphql';

import { WhereArgs } from './where.args';

@InputType()
export class WhereEntityFields {
  @Field(() => String, {
    description: 'Entity name.',
    nullable: true,
  })
  name?: string;
}

@InputType()
export class WhereEntity extends IntersectionType(
  WhereEntityFields,
  WhereArgs(WhereEntityFields),
  InputType,
) {}

@ArgsType()
export class GetEntityArgs {
  @Field(() => WhereEntity, { nullable: true })
  where?: WhereEntity;
}
