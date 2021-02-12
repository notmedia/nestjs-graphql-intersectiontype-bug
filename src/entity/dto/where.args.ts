import { Type } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';

export function WhereArgs<T>(classRef: Type<T>): any {
  @InputType({ isAbstract: true })
  abstract class WhereArgsType {
    @Field(() => [classRef], {
      description: 'All conditions must return true.',
      nullable: true,
    })
    AND?: T[];

    @Field(() => [classRef], {
      description: 'One or more conditions must return true.',
      nullable: true,
    })
    OR?: T[];

    @Field(() => [classRef], {
      description: 'All conditions must return false.',
      nullable: true,
    })
    NOT?: T[];
  }

  return WhereArgsType;
}
