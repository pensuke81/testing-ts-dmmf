type User = { id: string };

const findUser = async (id: string): Promise<User | null> => {
  return Math.random() < 0.5
    ? await Promise.resolve({ id })
    : await Promise.resolve(null);
};

const validate = (id: number | string): string => {
  if (typeof id === "string") {
    return id;
  }
  throw new Error("invalid string");
};

type UserWithProfile = { id: string; name: string };

const registerProfile = (user: User, name: string): UserWithProfile => {
  return { ...user, name: "Traou" };
};

export const main = async (input: string | number) => {
  const id = validate(input); // Errorがthrowされる
  const user = await findUser(id);
  if (user === null) {
    throw new Error("user not found");
  }
  registerProfile(user, "Traou");
};
