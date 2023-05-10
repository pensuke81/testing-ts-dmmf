import { Result, ResultAsync, err, ok } from "neverthrow";
type User = { id: string };

const findUser = (id: string): ResultAsync<User | null, Error> => {
  return ResultAsync.fromSafePromise(
    Promise.resolve(Math.random() < 0.5 ? { id } : null)
  );
};

// findUserの返り値にnullがふくまないようにする
const getUser = (id: string): ResultAsync<User, Error> => {
  return findUser(id).andThen((user) =>
    user ? ok(user) : err(new Error("user not found"))
  );
};

const validate = (id: number | string): Result<string, Error> => {
  if (typeof id === "string") {
    return ok(id);
  }
  return err(new Error("invalid string"));
};

type UserWithProfile = { id: string; name: string };

const registerProfile = (
  user: User,
  name: string
): Result<UserWithProfile, Error> => {
  return ok({ ...user, name });
};

export const main = async (input: string | number) => {
  return validate(input)
    .asyncAndThen((validatedInput) => getUser(validatedInput))
    .andThen((user) => registerProfile(user, "Traou"))
    .match(
      (user) => user,
      (error) => {
        console.error(error);
        // controllerでフロント側に適切なエラーを返す
        throw error;
      }
    );
};
