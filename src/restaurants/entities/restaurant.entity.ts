import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((is) => String)
  name: String;

  @Field((type) => Boolean)
  isVegan: boolean;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  ownersName: string;
}
