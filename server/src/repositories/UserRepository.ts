import { User } from "@prisma/client";
import { IUserCreate } from "../interfaces/IUserCreate";
import prisma from "../database";

class UserRepository implements IUserCreate {
  public async create(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    let userExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userExists) {
      throw new Error("Este email e usuário já existe!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }
}

export { UserRepository };
