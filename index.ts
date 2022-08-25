import { Ability, AbilityBuilder, Subject } from "@casl/ability";

type Actions = "create" | "read" | "update" | "delete";
type Subjects = "Article" | "Comment" | "User" | "Posts";
type AppAbility = Ability<[Actions, Subjects]>;

const defineAppAbility = () => {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(Ability);

  can("read", "Posts");
  return build();
};

const ability = defineAppAbility();
const isAllowed = ability.can("read", "Posts");

console.log(`Does Subject have ability to READ POST ?  : ${isAllowed}`);
console.log(
  `Does Subject have ability to CREATE POST ? : ${ability.can(
    "create",
    `Posts`
  )}`
);
